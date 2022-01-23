import axios from 'axios';
import React, { useState } from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { Host } from "../Data";
import { useSelector, useDispatch } from 'react-redux'
import { deleteSgent, updateAgent } from "../Redux/UserSlice"

function ManageAgentComponent({ agents }) {

    const [isOpenEditMode, setIsOpenEditeMode] = useState(false);
    const [currentAgent, setCurrentAgent] = useState("");
    const [agentType, setAgentType] = useState("");
    const [agentName, setAgentName] = useState("");
    const [agentId, setAgentId] = useState("");
    const [reating, setReating] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch()

    const OpenEditMode = (agent) => {

        setIsOpenEditeMode(true);
        setCurrentAgent(agent);
        setAgentType(agent.role);
        setAgentName(agent.fullName);
        setAgentId(agent.agentId);
        setReating(agent.reating);
        setMobileNumber(agent.mobileNumber);
    }
    const CloseEditMode = () => {

        setCurrentAgent("");
        setAgentType("");
        setAgentName("");
        setAgentId("");
        setReating("");
        setMobileNumber("");
        setIsOpenEditeMode(false);
    };

    const AskforDelete = async (agent) => {

        try {

            axios.get(`${Host}/api/user/delete/${agent._id}`, {
                headers: {
                    "Authorization": `Bearer ${User.token}`
                }
            });

            dispatch(deleteSgent(agent))

        } catch (error) {

            console.log(error)
        }

    }

    const UpdateAgent = async (agent) => {

        const updateAbleAgent = {
            agentName,
            agentId,
            agentType,
            reating,
            mobileNumber
        }

        try {

            const res = await axios.put(`${Host}/api/user/update/${agent._id}`, updateAbleAgent, {
                headers: {
                    "Authorization": `Bearer ${User.token}`
                }
            });

            dispatch(updateAgent(res.data));
            CloseEditMode()

        } catch (error) {

            console.log(error)
        }
    }


    // console.log(agentName)
    // console.log(agentType)
    // console.log(agentId)
    // console.log(reating)
    // console.log(mobileNumber)
    // console.log(confirmDelete)


    return (
        <div className=' w-full flex justify-center items-center my-3'>
            <div className='bg-white dark:bg-gray-700 rounded-md shadow '>
                <table className=' border-collapse border border-slate-400 w-full'>
                    <thead>
                        <tr className=' bg-gray-100 dark:bg-gray-500 dark:text-gray-300'>
                            <th className='border border-slate-300 font-semibold p-3'>TYPE</th>
                            <th className='border border-slate-300 font-semibold p-3'>NAME</th>
                            <th className='border border-slate-300 font-semibold p-3'>Id</th>
                            <th className='border border-slate-300 font-semibold p-3'>REATING</th>
                            <th className='border border-slate-300 font-semibold p-3'>PHONE APP LINK</th>
                            <th className='border border-slate-300 font-semibold p-3'>PHONE NUMBER</th>
                            <th className='border border-slate-300 font-semibold p-3'>Manage</th>
                        </tr>
                    </thead>
                    <tbody className=' w-full'>

                        {
                            agents && agents.map((agent, index) => {

                                return (
                                    <tr className=' dark:text-gray-300' key={index}>
                                        {
                                            isOpenEditMode && currentAgent._id === agent._id ?

                                                <td className='p-1'>
                                                    <select name="" id="" className=' w-full bg-gray-100 p-2 focus:outline-0' value={agentType} onChange={(e) => { setAgentType(e.target.value) }}>
                                                        <option value="">Agent Type</option>
                                                        <option value="CUSTOMER SERVICE" className=''>CUSTOMER SERVICE</option>
                                                        <option value="SUPER AGENT">SUPER AGENT</option>
                                                        <option value="ONLINE MUSTER AGENT">ONLINE MASTER AGENT</option>
                                                    </select>
                                                </td>
                                                :
                                                <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>{agent.role}</td>
                                        }

                                        {
                                            isOpenEditMode && currentAgent._id === agent._id ?
                                                <td >
                                                    <input type="text" value={agentName} onChange={(e) => { setAgentName(e.target.value) }} className=' w-full bg-gray-100 p-2 rounded-md' />
                                                </td>

                                                :
                                                <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>{agent.fullName}</td>
                                        }
                                        {
                                            isOpenEditMode && currentAgent._id === agent._id ?

                                                <td>
                                                    <input type="number" className=' bg-gray-100 p-2 rounded-md' value={agentId} onChange={(e) => { setAgentId(e.target.value) }} />
                                                </td>

                                                :
                                                <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>{agent.agentId}</td>

                                        }

                                        {
                                            isOpenEditMode && currentAgent._id === agent._id ?

                                                <td>
                                                    <input type="number" className=' bg-gray-100 p-2 rounded-md' value={reating} onChange={(e) => { setReating(e.target.value) }} />
                                                </td>

                                                :
                                                <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>{agent.agentId}</td>

                                        }

                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>
                                            <a href={agent.whatsAppLink} target={"_blank"} rel="noreferrer" className=' flex justify-center items-center cursor-pointer'>
                                                <FaWhatsappSquare className=' text-2xl text-green-400' />
                                            </a>
                                        </td>
                                        {
                                            isOpenEditMode && currentAgent._id === agent._id ?
                                                <td>
                                                    <input type="number" value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} className=' bg-gray-100 p-2 rounded-md' />
                                                </td>
                                                :
                                                <td className='border border-slate-300 p-3 text-center font-semibold text-red-400 cursor-pointer'>
                                                    <a href={agent.whatsAppLink} target={"_blank"} rel="noreferrer">{agent.mobileNumber}</a></td>
                                        }

                                        {
                                            isOpenEditMode && currentAgent._id === agent._id ?
                                                <td className='flex items-center p-3 text-center'>
                                                    <button onClick={() => UpdateAgent(agent)} className=' bg-blue-400 rounded-md text-white px-2 py-1 hover:bg-blue-500'>Save</button>
                                                    <button onClick={CloseEditMode} className=' bg-gray-300 rounded-md text-slate-600 px-2 py-1 ml-2 hover:bg-gray-400 font-semibold'>Cencel</button>
                                                </td>
                                                :
                                                <td className='border border-slate-300 flex items-center p-3 text-center font-semibold uppercase'>
                                                    <button onClick={() => OpenEditMode(agent)} className=' bg-blue-400 rounded-md text-white px-2 py-1 hover:bg-blue-500'>Eddit</button>
                                                    <button onClick={() => AskforDelete(agent)} className=' bg-gray-300 rounded-md text-slate-600 px-2 py-1 ml-2 hover:bg-gray-400 font-semibold'>Delete</button>
                                                </td>
                                        }


                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ManageAgentComponent;
