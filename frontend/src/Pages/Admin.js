import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import { FaWhatsappSquare } from 'react-icons/fa';
import axios from 'axios';
import { Host } from '../Data';
import { useSelector } from 'react-redux';

function Admin() {

    const [adminAgentList, setAdminAgentList] = useState(null);
    const User = useSelector(state => state.User.User);



    useEffect(() => {

        try {
            const getAgent = async () => {

                const res = await axios.get(`${Host}/api/user/admin`);

                setAdminAgentList(res.data);
            }

            getAgent();

        } catch (error) {

            console.log(error.response.data);
        }

    }, [])

    console.log(adminAgentList);

    return (
        <div className=' w-full h-screen bg-gray-200 dark:bg-gray-900 overflow-y-scroll'>
            <div className=' w-full'>
                <TopBarLogo />
                <Menubar />
                <div className=' w-full flex justify-center items-center my-3'>
                    <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                        <h2 className=' p-2 font-semibold text-center dark:text-gray-300'>Betbuss ADMIN LIST</h2>
                    </div>
                </div>
                <div className=' w-full flex justify-center items-center my-3'>
                    <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                        <table className=' border-collapse border border-slate-400 w-full'>
                            <thead>
                                <tr className=' bg-gray-100 dark:bg-gray-500 dark:text-gray-300'>
                                    <th className='border border-slate-300 font-semibold p-3'>TYPE</th>
                                    <th className='border border-slate-300 font-semibold p-3'>NAME</th>
                                    <th className='border border-slate-300 font-semibold p-3'>PHONE APP LINK</th>
                                    <th className='border border-slate-300 font-semibold p-3'>PHONE NUMBER</th>
                                </tr>
                            </thead>
                            <tbody className=' w-ful'>

                                {
                                    adminAgentList && adminAgentList.map((agent, index) => {

                                        return (
                                            <tr className=' dark:text-gray-300' key={index}>
                                                <td className='border border-slate-300 p-3 text-center font-semibold uppercase w-1/4'>{agent.role}</td>
                                                <td className='border border-slate-300 p-3 text-center font-semibold uppercase w-1/4'>{agent.fullName}</td>
                                                <td className='border border-slate-300 p-3 text-center font-semibold uppercase w-1/4'>
                                                    <a href={agent.whatsAppLink} target={"_blank"} rel="noreferrer" className=' flex justify-center items-center cursor-pointer'>
                                                        <FaWhatsappSquare className=' text-2xl text-green-400' />
                                                    </a>
                                                </td>
                                                <td className='border border-slate-300 p-3 text-center font-semibold w-1/4 text-red-400 cursor-pointer'>
                                                    <a href={agent.whatsAppLink} target={"_blank"} rel="noreferrer">{agent.mobileNumber}</a></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <p className=' p-4 text-sm dark:text-gray-300'>আকাশ মালিক হোয়াটসাপ ছাড়া আর কোন এপ ব্যবহার করে না - তাই হোয়াটসাপ ছাড়া আর অন্য কোন এপ এর মাধ্যমে যোগাযোগ করবেন না।</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;
