import React from 'react';
import CreateAgentComponent from '../Components/CreateAgentComponent';
import Menubar from '../Components/Menubar';
import TopBarLogo from '../Components/TopBarLogo';

function CreateAgent() {

    return (
        <div className='w-[850px] mt-0 mx-auto min-h-full'>
            <TopBarLogo />
            <Menubar />
            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-full bg-gray-700 rounded-md shadow '>
                    <h2 className=' p-2 font-semibold text-gray-300 text-lg text-center'>Create an Agent</h2>
                </div>
            </div>
            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-full bg-white rounded-md shadow '>
                    <CreateAgentComponent />
                </div>
            </div>
        </div >
    )
}

export default CreateAgent;
