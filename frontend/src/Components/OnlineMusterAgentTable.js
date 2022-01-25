import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

function OnlineMusterAgentTable({ onlineMusterAgent }) {

    const reating = (reating) => {

        const allReatings = []

        for (let i = 0; i < reating; i++) {

            allReatings.push(<AiTwotoneStar />)
        }

        return allReatings

    }

    return (
        <div className=' w-full flex justify-center items-center my-3'>
            <div className=' w-full bg-gray-700 rounded-md shadow '>
                <table className=' border-collapse border border-slate-400 w-full'>
                    <thead>
                        <tr className='bg-gray-500 text-gray-300'>
                            <th className='border border-slate-300 font-semibold p-3'>TYPE</th>
                            <th className='border border-slate-300 font-semibold p-3'>NAME</th>
                            <th className='border border-slate-300 font-semibold p-3'>Id</th>
                            <th className='border border-slate-300 font-semibold p-3'>RATING</th>
                            <th className='border border-slate-300 font-semibold p-3'>PHONE APP LINK</th>
                            <th className='border border-slate-300 font-semibold p-3'>PHONE NUMBER</th>
                            <th className='border border-slate-300 font-semibold p-3'>SUPER</th>
                        </tr>
                    </thead>
                    <tbody className=' w-full'>

                        {
                            onlineMusterAgent && onlineMusterAgent.map((agent, index) => {

                                return (
                                    <tr className=' text-gray-300' key={index}>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>{agent.role}</td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>{agent.fullName}</td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>{agent.agentId}</td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold flex items-center'>
                                            {
                                                reating(agent.reating)

                                            }
                                        </td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>
                                            <a href={`https://wa.me/${agent.mobileNumber}`} target={"_blank"} rel="noreferrer" className=' flex justify-center items-center cursor-pointer'>
                                                <FaWhatsappSquare className=' text-2xl text-green-400' />
                                            </a>
                                        </td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold text-red-400 cursor-pointer'>
                                            <a href={`https://wa.me/${agent.mobileNumber}`} target={"_blank"} rel="noreferrer">{agent.mobileNumber}</a></td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase'>
                                            <a href={`https://wa.me/16096382784`} target={"_blank"} rel="noreferrer" className='text-red-400'>Complain</a>
                                        </td>
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

export default OnlineMusterAgentTable;
