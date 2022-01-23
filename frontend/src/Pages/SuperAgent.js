import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import SuperAgentTable from '../Components/SuperAgentTable';
import axios from 'axios';
import { Host } from '../Data';
import { useSelector, useDispatch } from 'react-redux';

import { searchAgent } from "../Redux/UserSlice"

function SuperAgent() {

    const [isScroled, setIsScroled] = useState(false);
    const [superAgent, setSuperAgent] = useState(null);
    const User = useSelector(state => state.User.User);
    const SearchAgents = useSelector(state => state.User.searchAgent);
    const [serch, setSearch] = useState("");
    const dispatch = useDispatch()

    console.log(SearchAgents)

    const SetScroll = (e) => {

        if (e.target.scrollTop > 0) {
            setIsScroled(true);
        } else {
            setIsScroled(false);
        }
    }

    const SearchAgent = () => {

        dispatch(searchAgent(serch))

    }

    useEffect(() => {

        try {
            const getAgent = async () => {

                const res = await axios.get(`${Host}/api/user/superAgent`, {
                    headers: {
                        "Authorization": `Bearer ${User.token}`
                    }
                });

                setSuperAgent(res.data);
            }

            getAgent();

        } catch (error) {

            console.log(error.response.data);
        }

    }, [])

    return (
        <div onScroll={(e) => SetScroll(e)} className=' w-full h-screen bg-gray-200 overflow-y-scroll dark:bg-gray-900'>
            <div className=' w-full'>
                <div className={`${isScroled ? " bg-white dark:bg-slate-700" : ""} w-full sticky top-0 left-0`}>
                    <TopBarLogo />
                    <Menubar />
                </div>
                <div className=' w-full flex justify-center items-center my-3'>
                    <div className='bg-white dark:bg-gray-700 rounded-md shadow p-3'>
                        <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder='Search Agent Id' className=' bg-gray-100 dark:bg-gray-500 focus:outline-0 focus:ring-1 ring-blue-400 py-[6px] px-3 rounded-md' />
                        <button onClick={SearchAgent} className=' py-[6px] px-3 bg-blue-400 rounded-md text-white font-semibold ml-2 hover:bg-blue-500 dark:bg-gray-300  dark:text-gray-700 dark:hover:bg-gray-400'>Search</button>
                    </div>
                </div>
                <div className=' w-full flex justify-center items-center my-3'>
                    <div className='bg-white dark:bg-gray-700 rounded-md shadow '>
                        <h2 className=' p-2 font-semibold text-center dark:text-gray-300'>Betbuss SUPER AGENT LIST</h2>
                        <p className=' text-sm px-3 text-center dark:text-gray-300 pb-3'>Agents will not be able to communicate or transact with any app other than WhatsApp and will not be allowed to do so.</p>
                    </div>
                </div>
                <SuperAgentTable superAgent={superAgent} />
            </div>
        </div>
    )
}

export default SuperAgent;
