import React, { useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import QuickMusterAgentNum from '../Components/QuickMusterAgentNum';
import Openaccount from '../Components/Openaccount';
import AgentList from '../Components/AgentList';
import TypeOfAgent from '../Components/TypeOfAgent';


function Home() {

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
            <div className=' w-full'>
                <div className={`${isScroled ? " bg-white dark:bg-slate-700" : ""} w-full sticky top-0 left-0`}>
                    <TopBarLogo />
                    <Menubar />
                </div>
                <QuickMusterAgentNum />
                <Openaccount />
                <AgentList />
                <TypeOfAgent />
            </div>
        </div>
    )
}

export default Home;

