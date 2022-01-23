import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { AiTwotoneCustomerService } from 'react-icons/ai';
import { MdOutlineLogin, MdRealEstateAgent, MdSupportAgent } from 'react-icons/md';
import { GiMustache } from 'react-icons/gi';
import { RiAdminFill, RiFileSettingsFill } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { BiLogOut } from 'react-icons/bi';

function Menubar() {

    const user = useSelector(state => state.User.User);


    const Logout = () => {
        localStorage.removeItem('User');
        window.location.reload();
    }

    return (
        <div className=' w-full flex justify-center items-center'>
            <div className=' h-14 bg-white dark:bg-gray-700 p-3 shadow rounded-md flex items-center '>
                <NavLink to='/' className={({ isActive }) => isActive ? "menuItems text-blue-500" : "menuItems text-gray-700 dark:text-gray-300"}>
                    <AiFillHome className=' mr-1 text-lg' />
                    <span>Home</span>
                </NavLink>
                <NavLink to='/customerService' className={({ isActive }) => isActive ? "menuItems text-blue-500" : "menuItems text-gray-700 dark:text-gray-300"}>
                    <AiTwotoneCustomerService className=' mr-1 text-xl' />
                    <span>Customer Service</span>
                </NavLink>
                <NavLink to='/admin' className={({ isActive }) => isActive ? "menuItems text-blue-500" : "menuItems text-gray-700 dark:text-gray-300"}>
                    <RiAdminFill className=' mr-1 text-lg' />
                    <span>Admin</span>
                </NavLink>
                <NavLink to='/superAgent' className={({ isActive }) => isActive ? "menuItems text-blue-500" : "menuItems text-gray-700 dark:text-gray-300"}>
                    <MdRealEstateAgent className=' mr-1 text-lg' />
                    <span>Super Agent</span>
                </NavLink>
                <NavLink to='/onlineMasterAgent' className={({ isActive }) => isActive ? "menuItems text-blue-500" : "menuItems text-gray-700 dark:text-gray-300"}>
                    <GiMustache className=' mr-1 text-lg' />
                    <span>Online Master Agent</span>
                </NavLink>

                {
                    user &&

                    <NavLink to='/createAgent' className={({ isActive }) => isActive ? "menuItems text-blue-500" : "menuItems text-gray-700 dark:text-gray-300"}>
                        <MdSupportAgent className=' mr-1 text-lg' />
                        <span>Create Agent</span>
                    </NavLink>
                }
                {
                    user &&

                    <NavLink to='/manegeAgents' className={({ isActive }) => isActive ? "menuItems text-blue-500" : "menuItems text-gray-700 dark:text-gray-300"}>
                        <RiFileSettingsFill className=' mr-1 text-lg' />
                        <span>Manege Agents</span>
                    </NavLink>
                }
                {
                    user ?
                        <div onClick={Logout} className={"menuItems cursor-pointer text-gray-700 dark:text-gray-300"}>
                            <BiLogOut className=' mr-1 text-lg' />
                            <span>Log Out</span>
                        </div>
                        :
                        <NavLink to="/login" className={"menuItems cursor-pointer text-gray-700 dark:text-gray-300"}>
                            <MdOutlineLogin className=' mr-1 text-lg' />
                            <span>Admin?</span>
                        </NavLink>
                }

            </div>
        </div>
    )
}

export default Menubar;
