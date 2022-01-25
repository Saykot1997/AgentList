import React from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import QuickMusterAgentNum from '../Components/QuickMusterAgentNum';
import Openaccount from '../Components/Openaccount';
import AgentList from '../Components/AgentList';
import TypeOfAgent from '../Components/TypeOfAgent';


function Home() {

    return (
        <div className='w-[850px] mt-0 mx-auto min-h-full'>
            <TopBarLogo />
            <Menubar />
            <QuickMusterAgentNum />
            <Openaccount />
            <AgentList />
            <TypeOfAgent />
        </div>
    )
}

export default Home;

