import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';

function QuickMusterAgentNum() {
    return (
        <div className=' w-full flex justify-center items-center my-5'>
            <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-100 dark:bg-gray-600 rounded-md'>
                    <h2 className=' text-center dark:text-slate-300 text-3xl font-semibold'>QUICK MASTER AGENT NUMBER:</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    <div className=' w-[80%] p-4 bg-gray-100 dark:bg-gray-600 flex justify-between items-center'>
                        <p className=' text-base font-bold dark:text-slate-300'>AGENT ID:</p>
                        <p className=' text-base font-bold dark:text-slate-300'>52</p>
                        <div>
                            <FaWhatsappSquare className=' text-green-400 cursor-pointer text-xl' />
                        </div>
                        <p className=' text-base font-bold text-red-400'>+1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickMusterAgentNum;
