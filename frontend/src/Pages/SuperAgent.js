import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import SuperAgentTable from '../Components/SuperAgentTable';
import axios from 'axios';
import { Host } from '../Data';

function SuperAgent() {

    const [superAgent, setSuperAgent] = useState(null);

    useEffect(() => {

        try {
            const getAgent = async () => {

                const res = await axios.get(`${Host}/api/user/superAgent`);

                setSuperAgent(res.data);
            }

            getAgent();

        } catch (error) {

            console.log(error.response.data);
        }

    }, [])

    return (
        <div className='w-[850px] mt-0 mx-auto min-h-full'>
            <TopBarLogo />
            <Menubar />
            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-full bg-gray-700 rounded-md shadow '>
                    <h2 className=' p-2 font-semibold text-center text-gray-300'>Betbuzz SUPER AGENT LIST</h2>
                    <p className=' text-sm px-3 text-center text-gray-300 pb-3'>এজেন্টদের সাথে হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপের মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না</p>
                </div>
            </div>
            <SuperAgentTable superAgent={superAgent} />
        </div>

    )
}

export default SuperAgent;
