import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import axios from 'axios';
import { Host } from '../Data';
import { useSelector, useDispatch } from 'react-redux';
import ManageAgentComponent from '../Components/ManageAgentComponent';
import { setAllUsers } from "../Redux/UserSlice"

function ManegeAgents() {

    const allAgents = useSelector(state => state.User.allUsers);
    const dispatch = useDispatch();


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
        <div className='w-[850px] mt-0 mx-auto min-h-full'>
            <TopBarLogo />
            <Menubar />
            <ManageAgentComponent agents={allAgents} />
        </div>
    )
}

export default ManegeAgents;
