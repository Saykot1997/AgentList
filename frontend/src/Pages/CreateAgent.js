import React, { useState } from 'react';
import CreateAgentComponent from '../Components/CreateAgentComponent';
import Menubar from '../Components/Menubar';
import TopBarLogo from '../Components/TopBarLogo';

function CreateAgent() {
    const [isScroled, setIsScroled] = useState(false);

    const SetScroll = (e) => {

        if (e.target.scrollTop > 0) {
            setIsScroled(true);
        } else {
            setIsScroled(false);
        }
    }

    return (
        <div onScroll={(e) => SetScroll(e)} className=' w-full h-screen bg-gray-200 dark:bg-gray-900 overflow-y-scroll'>
            <div className={`${isScroled ? " bg-white dark:bg-slate-700" : ""} w-full sticky top-0 left-0`}>
                <TopBarLogo />
                <Menubar />
            </div>

            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                    <h2 className=' p-2 font-semibold text-lg text-center dark:text-gray-300'>Create an Agent</h2>
                </div>
            </div>
            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                    <CreateAgentComponent />
                </div>
            </div>

        </div >
    )
}

export default CreateAgent;
