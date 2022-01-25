import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { AiTwotoneCustomerService } from 'react-icons/ai';
import { MdOutlineLogin, MdRealEstateAgent, MdSupportAgent } from 'react-icons/md';
import { GiMustache } from 'react-icons/gi';
import { RiAdminFill, RiFileSettingsFill } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { BiLogOut } from 'react-icons/bi';

function Menubar() {

    const user = useSelector(state => state.User.User);
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem('User');
        navigate('/');
        window.location.reload();
    }

    return (
        <div className=' w-full flex justify-center items-center'>
            <div className={`${user ? "adminmenuBar" : "menuBar"}`}>
                <NavLink to='/' className={({ isActive }) => isActive ? `menuItems text-blue-500 ${user && "adminMenuItems"}` : `menuItems text-gray-300 ${user && "adminMenuItems"}`}>
                    <AiFillHome className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                    <span>হোম</span>
                </NavLink>
                <NavLink to='/customerService' className={({ isActive }) => isActive ? `menuItems text-blue-500 ${user && "adminMenuItems"}` : `menuItems text-gray-300 ${user && "adminMenuItems"}`}>
                    <AiTwotoneCustomerService className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                    <span>কাস্টমার সার্ভিস</span>
                </NavLink>
                <NavLink to='/admin' className={({ isActive }) => isActive ? `menuItems text-blue-500 ${user && "adminMenuItems"}` : `menuItems text-gray-300 ${user && "adminMenuItems"}`}>
                    <RiAdminFill className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                    <span>এডমিন</span>
                </NavLink>
                <NavLink to='/superAgent' className={({ isActive }) => isActive ? `menuItems text-blue-500 ${user && "adminMenuItems"}` : `menuItems text-gray-300 ${user && "adminMenuItems"}`}>
                    <MdRealEstateAgent className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                    <span>সুপার এজেন্ট</span>
                </NavLink>
                <NavLink to='/onlineMasterAgent' className={({ isActive }) => isActive ? `menuItems text-blue-500 ${user && "adminMenuItems"}` : `menuItems text-gray-300 ${user && "adminMenuItems"}`}>
                    <GiMustache className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                    <span>অনলাইন মাষ্টার এজেন্ট</span>
                </NavLink>

                {
                    user &&

                    <NavLink to='/createAgent' className={({ isActive }) => isActive ? `menuItems text-blue-500 ${user && "adminMenuItems"}` : `menuItems text-gray-300 ${user && "adminMenuItems"}`}>
                        <MdSupportAgent className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                        <span>এজেন্ট তৈরি করুন</span>
                    </NavLink>
                }
                {
                    user &&

                    <NavLink to='/manegeAgents' className={({ isActive }) => isActive ? `menuItems text-blue-500 ${user && "adminMenuItems"}` : `menuItems text-gray-300 ${user && "adminMenuItems"}`}>
                        <RiFileSettingsFill className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                        <span>এজেন্ট সম্পাদনা</span>
                    </NavLink>
                }
                {
                    user ?
                        <div onClick={Logout} className={`adminMenuItems cursor-pointer text-gray-300`}>
                            <BiLogOut className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                            <span>প্রস্থান</span>
                        </div>
                        :
                        <NavLink to="/login" className={"menuItems cursor-pointer text-gray-300"}>
                            <MdOutlineLogin className={`${user ? "AdminmenuIcons" : "menuIcons"}`} />
                            <span>এডমিন?</span>
                        </NavLink>
                }

            </div>
        </div>
    )
}

export default Menubar;
