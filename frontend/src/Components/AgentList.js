import React from 'react';

function AgentList() {
    return (
        <div className=' w-full flex justify-center items-center mb-5'>
            <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-100 dark:bg-gray-600 rounded-md'>
                    <h2 className=' text-center dark:text-slate-300 text-3xl font-semibold'>Agent list:</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    <div className='p-4 bg-gray-100 dark:bg-gray-600 flex justify-between items-center'>
                        <p className=' text-base dark:text-slate-300'>Click on Nimbe's online agent list to open an account. Users only need to communicate with the agents of the agent list through WhatsApp. Communicating or transacting through any medium other than WhatsApp will not be acceptable. If you want to contact WhatsApp, click on the WhatsApp icon in the agent list or you can save the phone number on your mobile and send him a message on WhatsApp. The WhatsApp app must already be on your mobile. If not, install it from Google Play.
                            Online Master Agent List:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentList;
