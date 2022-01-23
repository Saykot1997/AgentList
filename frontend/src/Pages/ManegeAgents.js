import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import axios from 'axios';
import { Host } from '../Data';
import { useSelector, useDispatch } from 'react-redux';
import ManageAgentComponent from '../Components/ManageAgentComponent';
import { setAllUsers } from "../Redux/UserSlice"

function ManegeAgents() {

    const [isScroled, setIsScroled] = useState(false);
    const allAgents = useSelector(state => state.User.allUsers);
    const dispatch = useDispatch();

    const SetScroll = (e) => {

        if (e.target.scrollTop > 0) {

            setIsScroled(true);
        } else {

            setIsScroled(false);
        }
    }

    useEffect(() => {

        try {
            const getAgent = async () => {

                const res = await axios.get(`${Host}/api/user/getAllAgents`);
                dispatch(setAllUsers(res.data))
            }

            getAgent();

        } catch (error) {

            console.log(error.response.data);
        }

    }, []);

    return (
        <div onScroll={(e) => SetScroll(e)} className=' w-full h-screen bg-gray-200 overflow-y-scroll dark:bg-gray-900'>
            <div className=' w-full'>
                <div className={`${isScroled ? " bg-white dark:bg-slate-700" : ""} w-full sticky top-0 left-0`}>
                    <TopBarLogo />
                    <Menubar />
                </div>
                <div className=' w-full flex justify-center items-center my-3'>
                    <div className='bg-white dark:bg-gray-700 rounded-md shadow p-3'>
                        <input type="text" placeholder='Search Agent Id' className=' bg-gray-100 dark:bg-gray-500 focus:outline-0 focus:ring-1 ring-blue-400 py-[6px] px-3 rounded-md' />
                        <button className=' py-[6px] px-3 bg-blue-400 rounded-md text-white font-semibold ml-2 hover:bg-blue-500 dark:bg-gray-300  dark:text-gray-700 dark:hover:bg-gray-400'>Search</button>
                    </div>
                </div>
                <ManageAgentComponent agents={allAgents} />
            </div>
        </div>
    )
}

export default ManegeAgents;
