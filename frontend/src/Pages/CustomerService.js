import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import CustomerServiceTable from '../Components/CustomerServiceTable';
import axios from 'axios';
import { Host } from '../Data';
import { useSelector } from 'react-redux';

function CustomerService() {
    const [isScroled, setIsScroled] = useState(false);
    const [customerService, setCustomerService] = useState(null);
    const User = useSelector(state => state.User.User);

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

                const res = await axios.get(`${Host}/api/user/customerService`);

                setCustomerService(res.data);
            }

            getAgent();

        } catch (error) {

            console.log(error.response.data);
        }

    }, [])

    return (
        <div onScroll={(e) => SetScroll(e)} className=' w-full h-screen bg-gray-200 dark:bg-gray-900 overflow-y-scroll'>
            <div className={`${isScroled ? " bg-white dark:bg-slate-700" : ""} w-full sticky top-0 left-0`}>
                <TopBarLogo />
                <Menubar />
            </div>

            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow '>
                    <h2 className=' p-2 font-semibold text-center dark:text-gray-300'>Betbuss CUSTOMER SERVICE LIST (TIME 10AM TO 10PM)</h2>
                    <p className=' text-center dark:text-gray-300 text-sm p-3'> Customer service will not be accessed through any app other than WhatsApp and will not give your account password to anyone.</p>
                </div>
            </div>
            <CustomerServiceTable customerService={customerService} />
            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-[50%] bg-white dark:bg-gray-700 rounded-md shadow p-5 dark:text-gray-300'>
                    <p>Do not give your password to any of the customer service. Just enter the username of your NineWickets - if required.
                        *** Please contact "General Inquiry" for general information . *** Please contact "General Inquiry"
                        for information about the bet . *** Requested to contact "CUSTOMER SERVICE" for any points related complaints . *** Requested to contact "CUSTOMER SERVICE" for any queries regarding BET . *** Requested to contact "CS MANAGER" for any complaints regarding the agent .</p>
                </div>
            </div>
        </div >
    )
}

export default CustomerService;
