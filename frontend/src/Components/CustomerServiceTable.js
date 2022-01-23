import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';

function CustomerServiceTable({ customerService }) {


    return (
        <div className=' w-full flex justify-center items-center my-3'>
            <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                <table className=' border-collapse border border-slate-400 w-full'>
                    <thead>
                        <tr className=' bg-gray-100 dark:bg-gray-500 dark:text-gray-300'>
                            <th className='border border-slate-300 font-semibold p-3'>TYPE</th>
                            <th className='border border-slate-300 font-semibold p-3'>NAME</th>
                            <th className='border border-slate-300 font-semibold p-3'>PHONE APP LINK</th>
                            <th className='border border-slate-300 font-semibold p-3'>PHONE NUMBER</th>
                        </tr>
                    </thead>
                    <tbody className=' w-ful'>

                        {
                            customerService && customerService.map((agent, index) => {

                                return (
                                    <tr className=' dark:text-gray-300' key={index}>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase w-1/4'>{agent.role}</td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase w-1/4'>{agent.fullName}</td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold uppercase w-1/4'>
                                            <a href={agent.whatsAppLink} target={"_blank"} rel="noreferrer" className=' flex justify-center items-center cursor-pointer'>
                                                <FaWhatsappSquare className=' text-2xl text-green-400' />
                                            </a>
                                        </td>
                                        <td className='border border-slate-300 p-3 text-center font-semibold w-1/4 text-red-400 cursor-pointer'>
                                            <a href={agent.whatsAppLink} target={"_blank"} rel="noreferrer">{agent.mobileNumber}</a></td>
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

export default CustomerServiceTable;