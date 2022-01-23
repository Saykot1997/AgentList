import React from 'react';

function Openaccount() {
    return (
        <div className=' w-full flex justify-center items-center mb-5'>
            <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-100 dark:bg-gray-600 rounded-md'>
                    <h2 className=' text-center dark:text-slate-300 text-3xl font-semibold'>How to open an account:</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    <div className='p-4 bg-gray-100 dark:bg-gray-600 flex justify-between items-center'>
                        <p className=' text-base dark:text-slate-300'>If you want to create an account at Nine Wickets, you need to open an account through your agent. Money must be deposited and withdrawn through the agent. You will always have to deal with the agent from whom you will open the account. To understand exactly which agent to pay and how to deal with it, it is important to read the information in your nimb.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Openaccount;
