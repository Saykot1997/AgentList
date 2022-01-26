import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import axios from "axios";
import { CgDanger } from 'react-icons/cg';
import { Host } from "../Data";


function Register({ createAccount, setCreateAccount }) {
    const [firstName, setFirstName] = useState("");
    const [sureName, setSureName] = useState("");
    const [mobile, setMobile] = useState("");
    const [secrateCode, setSecrateCode] = useState("");
    const [secrateErr, setSecrateErr] = useState("");
    const [password, setPassword] = useState("")
    const [firstNameErr, setFirstNameErr] = useState("")
    const [sureNameErr, setSureNameErr] = useState("")
    const [mobileErr, setMobileErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [showError, setShowError] = useState("")
    const [agentId, setAgentId] = useState("")
    const [agentIdErr, setAgentIdErr] = useState("")
    const [serverErr, setServerErr] = useState("")

    useEffect(() => {

        setFirstName("");
        setSureName("");
        setMobile("");
        setPassword("");
        setSecrateCode("")
        setFirstNameErr("");
        setSureNameErr("");
        setMobileErr("");
        setPasswordErr("");
        setShowError("");
        setSecrateErr("");
        setServerErr("");

    }, [])


    const RegisterUser = async (e) => {

        e.preventDefault();
        setFirstNameErr("");
        setSureNameErr("");
        setMobileErr("");
        setPasswordErr("");
        setShowError("");

        if (!firstName) {

            setFirstNameErr("What's your first name?");

        } else if (firstName.length < 3) {

            setFirstNameErr("First name must be at least 3 characters long");

        } else if (!sureName) {

            setSureNameErr("What's your sure name?");

        } else if (sureName.length < 3) {

            setSureNameErr("Sure name must be at least 3 characters long");

        } else if (!mobile) {

            setMobileErr("Enter your mobile address");
        }
        else if (mobile && mobile.length < 10) {

            setMobileErr("Email or mobile number contains at least 10 characters");
        }
        else if (!password) {

            setPasswordErr("What's your password?");

        } else if (password.length < 6) {

            setPasswordErr("Password must be at least 6 characters long");

        } else if (!agentId) {
            setAgentIdErr("Agent Id require")
        }
        else if (!secrateCode) {

            setSecrateErr("Enter your secrate code");
        }
        else {
            CloseErrorMessage()
            const userData = {
                firstName,
                sureName,
                password,
                mobileNumber: mobile,
                secrateCode,
                agentId
            }

            try {

                const res = await axios.post(`${Host}/api/auth/register`, userData)
                console.log(res.data)
                res && setCreateAccount(false);
                res && closeTheForm();

            } catch (error) {
                console.log(error)

                if (error.response.data === "User mobileNumber is already exist") {

                    setServerErr("Mobile number is already exist")

                } else if (error.response.data === "User agentId is already exist") {

                    setServerErr("Agent Id is already exist")

                } else if (error.response.data === "secrate code is not correct") {

                    setServerErr("Secrate code is not correct")

                } else {

                    setServerErr("Server Error")
                }
            }
        }

    }

    const closeTheForm = () => {

        setFirstName("");
        setSureName("");
        setMobile("");
        setPassword("");
        setSecrateCode("");
        setFirstNameErr("");
        setSureNameErr("");
        setMobileErr("");
        setSecrateErr("");
        setPasswordErr("");
        setShowError("");
        setAgentIdErr("");
        setAgentId("")
        setServerErr("");

    }

    const ShowErrorMessage = (error) => {
        setShowError(error)
    }

    const CloseErrorMessage = () => {
        setFirstNameErr("");
        setSureNameErr("");
        setMobileErr("")
        setPasswordErr("");
        setShowError("");
        setSecrateErr("");
        setServerErr("");
    }



    return (
        <div className={`${createAccount ? " visible" : " hidden"} absolute w-full h-full bg-slate-900 top-0 left-0 flex justify-center bg-opacity-70 `}>
            <div className={`h-[500px]" mt-32 w-full flex justify-center`}>
                <div className=' bg-slate-700 shadow h-[500px] w-[430px] shadow-gray-300 rounded-lg '>
                    <div className=' flex justify-between p-3'>
                        <div>
                            <h2 className=' text-3xl font-bold text-gray-300'>Sign Up</h2>
                            <p className=' text-sm mt-1 text-gray-300'>It is quick and easy</p>
                        </div>
                        <AiOutlineClose onClick={() => { setCreateAccount(false); closeTheForm() }} className=' font-extrabold text-red-500 text-2xl cursor-pointer' />
                    </div>
                    <hr />
                    <form onSubmit={(e) => RegisterUser(e)} className=' w-full'>
                        <div className=' p-3 w-full'>
                            <div className=' flex justify-between w-full my-1'>
                                <div className={`w-[48%] relative ${firstNameErr && "border border-red-400 animate-shake"}`}>
                                    <input onFocus={CloseErrorMessage} onChange={(e) => { setFirstName(e.target.value) }} value={firstName} type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='First name' />
                                    {
                                        showError === "firstNameErr" &&
                                        <div className=' absolute w-full rounded-md right-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                            <p>{firstNameErr}</p>
                                        </div>
                                    }
                                    {
                                        firstNameErr &&
                                        <CgDanger onClick={() => { ShowErrorMessage("firstNameErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                    }
                                </div>
                                <div className={`w-[48%] relative ${sureNameErr && "border border-red-400 animate-shake"}`}>
                                    <input onFocus={CloseErrorMessage} onChange={(e) => { setSureName(e.target.value) }} value={sureName} type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Sure name' />
                                    {
                                        showError === "sureNameErr" &&
                                        <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                            <p>{sureNameErr}</p>
                                        </div>
                                    }
                                    {
                                        sureNameErr &&
                                        <CgDanger onClick={() => { ShowErrorMessage("sureNameErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                    }
                                </div>
                            </div>
                            <div className={`w-full relative my-2 ${mobileErr ? "border border-red-400 animate-shake" : ""}`}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { setMobile(e.target.value) }} value={mobile} type="text" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Mobile Number' />
                                {
                                    showError === "mobileErr" &&
                                    <div className=' absolute w-4/5 rounded-md right-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        {
                                            mobileErr && <p>{mobileErr}</p>
                                        }
                                    </div>
                                }
                                {
                                    mobileErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("mobileErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>
                            <div className={`w-full my-2 relative ${passwordErr && "border border-red-400 animate-shake"}`}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='New password' />
                                {
                                    showError === "passwordErr" &&
                                    <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        <p>{passwordErr}</p>
                                    </div>
                                }
                                {
                                    passwordErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("passwordErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>
                            <div className={`w-full my-2 relative ${secrateErr && "border border-red-400 animate-shake"}`}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { setSecrateCode(e.target.value) }} value={secrateCode} type="password" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Admin Secrate' />
                                {
                                    showError === "secrateErr" &&
                                    <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        <p>{secrateErr}</p>
                                    </div>
                                }
                                {
                                    secrateErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("secrateErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>
                            <div className={`w-full my-2 relative ${agentIdErr && "border border-red-400 animate-shake"}`}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { setAgentId(e.target.value) }} value={agentId} type="number" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Agent Id' />
                                {
                                    showError === "agentIdErr" &&
                                    <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        <p>{agentIdErr}</p>
                                    </div>
                                }
                                {
                                    agentIdErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("agentIdErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>
                            <div className=' w-full mt-4 mb-1 flex justify-center'>
                                <button className=' py-[6px] px-16 disabled:cursor-not-allowed disabled:bg-green-900 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold'>Sign Up</button>
                            </div>
                            {
                                serverErr &&
                                <p className=' text-red-500 text-sm text-center mt-1 font-semibold'>{serverErr}</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register