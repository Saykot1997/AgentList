import React from 'react';

function TypeOfAgent() {
    return (
        <div className=' w-full flex justify-center items-center mb-5'>
            <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-100 dark:bg-gray-600 rounded-md'>
                    <h2 className=' text-center dark:text-slate-300 text-3xl font-semibold'>How many types of agents?</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    <div className='p-4 bg-gray-100 dark:bg-gray-600'>
                        <p className=' text-base dark:text-slate-300 text-center'>Online Super Agent List : You can open Super Agent Ra, User Account and Master Agent Account. If there is a complaint in the name of a super agent - you have to inform the admin directly. Admin list is given in the menu above.
                            Online Master Agent List : Online Master Agent can only open a user account. If there is a complaint in the name of any master agent - you have to complain directly to the super agent. Click on this link for details.
                            Local Master Agent List: Local Master Agent can only open a user account. But dealing with them, each user has to deal with their own responsibility. No complaint can be made in their name.</p>

                        <p className='text-base dark:text-slate-300 text-center mt-2'>Local Master Agent: These agents usually deal in their area or with acquaintances. Those who used to place bets have been given local agents. Local agents don't come online and they want to keep their identities secret. Don't deal with local agents online in any way, and if you do, it's entirely your responsibility.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeOfAgent;
