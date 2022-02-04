import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { Host } from "../Data";

function QuickMusterAgentNum() {

    const [onlineMusterAgent, setOnlineMusterAgent] = useState(null);

    useEffect(() => {

        try {
            const getAgent = async () => {

                const res = await axios.get(`${Host}/api/user/onlineMasterAgent`);

                setOnlineMusterAgent(res.data);

            }

            getAgent();

        } catch (error) {

            console.log(error.response.data);
        }

    }, [])

    return (
        <div className=' flex justify-center items-center my-5'>
            <div className=' w-full bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-600 rounded-md'>
                    <h2 className=' text-center text-slate-300 text-3xl font-semibold'>QUICK MASTER AGENT NUMBER:</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    {
                        onlineMusterAgent && onlineMusterAgent.slice(0, 1).map((item, index) => {

                            return (
                                <div key={index} className=' w-[80%] p-4 bg-gray-600 flex justify-between items-center'>
                                    <p className=' text-base font-bold text-slate-300'>AGENT ID:</p>
                                    <p className=' text-base font-bold text-slate-300'>{item.agentId}</p>
                                    <div>
                                        <a href={`https://wa.me/${item.mobileNumber}`} target="_blank" rel="noopener noreferrer">

                                            <FaWhatsappSquare className=' text-green-400 cursor-pointer text-xl' />
                                        </a>
                                    </div>
                                    <a href={`https://wa.me/${item.mobileNumber}`} target="_blank" rel="noopener noreferrer" className=' text-base font-bold text-red-400'>{item.mobileNumber}</a>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default QuickMusterAgentNum;
