import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import { FaWhatsappSquare } from 'react-icons/fa';
import axios from 'axios';
import { Host } from '../Data';

function Admin() {

    const [adminAgentList, setAdminAgentList] = useState(null);

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


    return (
        <div className='w-[850px] mt-0 mx-auto min-h-full'>
            <TopBarLogo />
            <Menubar />
            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-full bg-gray-700 rounded-md shadow '>
                    <h2 className=' p-2 font-semibold text-gray-300 text-center dark:text-gray-300'>Betbuzz ADMIN LIST</h2>
                </div>
            </div>
            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-full bg-gray-700 rounded-md shadow '>
                    <table className=' border-collapse border border-slate-400 w-full'>
                        <thead>
                            <tr className=' bg-gray-500 text-gray-300'>
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
                                        <tr className='text-gray-300' key={index}>
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
                    <p className=' p-4 text-sm text-gray-300 text-center'> এডমিন হোয়াটসঅ্যাপ ছাড়া আর কোন এপ ব্যবহার করে না - তাই হোয়াটসঅ্যাপ ছাড়া আর অন্য কোন এপের মাধ্যমে যোগাযোগ করবেন না।</p>

                </div>
            </div>
        </div>
    )
}

export default Admin;
