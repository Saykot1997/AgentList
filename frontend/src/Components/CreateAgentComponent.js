import React, { useEffect, useState } from 'react'
import axios from "axios";
import { CgDanger } from 'react-icons/cg';
import { Host } from "../Data";
import { useSelector } from 'react-redux'

function CreateAgentComponent() {
    const [firstName, setFirstName] = useState("");
    const [sureName, setSureName] = useState("");
    const [mobile, setMobilErr] = useState("");
    const [reating, setReating] = useState("");
    const [agentType, setAgentType] = useState("");
    const [agentTypeErr, setAgentTypeErr] = useState("");
    const [reatingerr, setReatingErr] = useState("");
    const [agentId, setAgentId] = useState("");
    const [firstNameErr, setFirstNameErr] = useState("")
    const [sureNameErr, setSureNameErr] = useState("")
    const [mobileErr, setMobileErr] = useState("")
    const [agentIdErr, setAgentIdErr] = useState("")
    const [showError, setShowError] = useState("");
    const User = useSelector(state => state.User.User);

    useEffect(() => {

        setFirstName("");
        setSureName("");
        setMobilErr("");
        setAgentId("");
        setReating("")
        setFirstNameErr("");
        setSureNameErr("");
        setMobileErr("");
        setAgentIdErr("");
        setShowError("");
        setReatingErr("")

    }, [])


    const RegisterUser = async (e) => {

        e.preventDefault();
        setFirstNameErr("");
        setSureNameErr("");
        setMobileErr("");
        setAgentIdErr("");
        setShowError("");
        setReatingErr("")
        setAgentTypeErr("")

        if (!firstName) {

            setFirstNameErr("What's agent first name?");

        } else if (firstName.length < 3) {

            setFirstNameErr("First name must be at least 3 characters long");

        } else if (!sureName) {

            setSureNameErr("What's agent sure name?");

        } else if (sureName.length < 3) {

            setSureNameErr("Sure name must be at least 3 characters long");

        } else if (!mobile) {

            setMobileErr("Enter Agent Mobile Number");
        }
        else if (mobile && mobile.length < 10) {

            setMobileErr("Mobile number contains at least 10 characters");
        }
        else if (!agentId) {

            setAgentIdErr("Enter an agentId?");

        } else if (!reating) {

            setReatingErr("Enter an agent rating?");
        }
        else if (agentType === "") {

            setAgentTypeErr("Select an agent type");
        }
        else {

            CloseErrorMessage()
            const userData = {
                firstName,
                sureName,
                agentId,
                mobile,
                reating,
                agentType
            }

            try {

                const res = await axios.post(`${Host}/api/user/createAgent`, userData, {
                    headers: {
                        "Authorization": `Bearer ${User.token}`
                    }
                });

                console.log(res.data)

                setFirstName("");
                setSureName("");
                setMobilErr("");
                setAgentId("");
                setReating("")
                setFirstNameErr("");
                setSureNameErr("");
                setMobileErr("");
                setAgentIdErr("");
                setShowError("");
                setReatingErr("")

            } catch (error) {

                if (error.response.data.keyValue.mobileNumber) {

                    setShowError("Mobile number already exists");

                } else if (error.response.data.keyValue.agentId) {

                    setShowError("AgentId is already exists");
                }


                console.log(error.response.data)

            }
        }

    }

    const ShowErrorMessage = (error) => {
        setShowError(error)
    }

    const CloseErrorMessage = () => {
        setFirstNameErr("");
        setSureNameErr("");
        setMobileErr("")
        setAgentIdErr("");
        setShowError("");
        setReatingErr("");
        setAgentTypeErr("")

    }



    return (

        <div className={`h-[500px]" w-full bg-gray-700 p-3 flex justify-center`}>
            <div className='bg-slate-700 shadow-gray-300 rounded-lg '>
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
                            <input onFocus={CloseErrorMessage} onChange={(e) => { setMobilErr(e.target.value) }} value={mobile} type="number" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Mobile Number' />
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
                        <div className={`w-full my-2 relative ${agentIdErr && "border border-red-400 animate-shake"}`}>
                            <input onFocus={CloseErrorMessage} onChange={(e) => { setAgentId(e.target.value) }} value={agentId} type="number" className=' w-full py-2 border border-gray-300 bg-gray-100 px-2 focus:outline-0 rounded placeholder:text-gray-500' placeholder='Enter Agent ID' />
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
                        <div className={`w-full my-2 relative ${reatingerr && "border border-red-400 animate-shake"}`}>
                            <select name="" id="" className=' w-full bg-gray-100 p-2 focus:outline-0' value={reating} onChange={(e) => { setReating(e.target.value); setReatingErr("") }}>
                                <option value="">Rating</option>
                                <option value="1" className=''>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            {
                                showError === "reatingerr" &&
                                <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                    <p>{reatingerr}</p>
                                </div>
                            }
                            {
                                reatingerr &&
                                <CgDanger onClick={() => { ShowErrorMessage("reatingerr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                            }
                        </div>
                        <div className={`w-full my-2 relative ${agentTypeErr && "border border-red-400 animate-shake"}`}>
                            <select name="" id="" className=' w-full bg-gray-100 p-2 focus:outline-0' value={agentType} onChange={(e) => { setAgentType(e.target.value); setAgentTypeErr("") }}>
                                <option value="">Agent Type</option>
                                <option value="CUSTOMER SERVICE" className=''>CUSTOMER SERVICE</option>
                                <option value="SUPER AGENT">SUPER AGENT</option>
                                <option value="ONLINE MUSTER AGENT">ONLINE MASTER AGENT</option>
                            </select>
                            {
                                showError === "agentTypeErr" &&
                                <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                    <p>{agentTypeErr}</p>
                                </div>
                            }
                            {
                                agentTypeErr &&
                                <CgDanger onClick={() => { ShowErrorMessage("agentTypeErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                            }
                        </div>
                        <div className=' w-full mt-4 mb-1 flex justify-center'>
                            <button className=' py-[6px] px-16 disabled:cursor-not-allowed disabled:bg-green-900 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold'>Create</button>
                        </div>
                        {
                            showError &&
                            <p className=' text-red-500 text-sm text-center'>{showError}</p>
                        }
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreateAgentComponent;
