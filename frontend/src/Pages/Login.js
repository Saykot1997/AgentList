import axios from 'axios';
import React, { useState } from 'react'
import { CgDanger } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom'
import Register from '../Components/Register';
import TopBarLogo from '../Components/TopBarLogo';
import { Host } from '../Data';
import { setUser } from '../Redux/UserSlice'
import { useDispatch } from 'react-redux'


function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [createAccount, setCreateAccount] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumberErr, setMobileNumberErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [showError, setShowError] = useState("");


    const ShowCreateAccountPage = () => {
        setCreateAccount(true);
    }

    const CloseErrorMessage = () => {
        setMobileNumberErr('');
        setPasswordErr('');
        setShowError('');
    }

    const ShowErrorMessage = (error) => {
        setShowError(error)
    }

    const Login = async () => {

        if (mobileNumber === '') {

            setMobileNumberErr('Mobile number is required');

        } else if (mobileNumber && mobileNumber.length < 10) {

            setMobileNumberErr('Mobile number must be at least 10 characters long');

        } else if (password === '') {

            setPasswordErr('Password is required');

        } else if (password.length < 6) {

            setPasswordErr('Password must be at least 6 characters long');

        } else {

            setMobileNumberErr('');
            setPasswordErr('');
            setShowError('');

            const userData = {
                password: password,
                mobileNumber: mobileNumber
            }

            try {

                const res = await axios.post(`${Host}/api/auth/login`, userData);

                dispatch(setUser(res.data));
                res && setMobileNumber('');
                res && setPassword('');
                navigate('/');

            } catch (error) {

                setShowError("Mobilenumber or password is incorrect");
            }

        }
    }

    return (
        <div className='w-[850px] mt-0 mx-auto min-h-full'>
            <TopBarLogo />
            <div className=' w-full'>
                <div className='w-[395px] mx-auto shadow-gray-400 shadow bg-slate-700 rounded-md p-4'>
                    <p className=' text-center text-lg mb-4 text-gray-300'>Log in to access the agent list</p>
                    <div className={`${mobileNumberErr && " ring-2 ring-red-500 animate-shake rounded-md"} relative w-full`}>
                        <input onFocus={CloseErrorMessage} onChange={(e) => { setMobileNumber(e.target.value) }} value={mobileNumber} type="number" placeholder='Mobile number' className={`p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded`} />
                        {
                            showError === "mobileNumberErr" &&
                            <div className=' absolute w-1/2 rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                <p>{mobileNumberErr}</p>
                            </div>
                        }
                        {
                            mobileNumberErr &&
                            <CgDanger onClick={() => { ShowErrorMessage("mobileNumberErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                        }
                    </div>
                    <div className={` relative w-full my-2 ${passwordErr && " ring-2 ring-red-500 animate-shake rounded-md"} `}>
                        <input onFocus={CloseErrorMessage} onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" placeholder='Password' className={`p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded`} />

                        {
                            showError === "passwordErr" &&
                            <div className=' absolute w-6/12 rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                <p>{passwordErr}</p>
                            </div>
                        }
                        {
                            passwordErr &&
                            <CgDanger onClick={() => { ShowErrorMessage("passwordErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                        }

                    </div>
                    <button onClick={Login} className=' w-full py-3 bg-blue-500 text-white font-bold text-lg rounded-md my-2 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-900'>Log In</button>
                    <hr className=' h-[1px] bg-gray-500 w-full my-4' />
                    <div className=' w-full flex justify-center items-center'>
                        <button onClick={ShowCreateAccountPage} className=' w-[55%] py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold'>Create New Account</button>
                    </div>
                    <p className=' text-red-500 text-sm text-center mt-2 font-semibold'>{showError}</p>
                </div>
                <Register createAccount={createAccount} setCreateAccount={setCreateAccount} />
            </div>
        </div>




    )
}

export default Login