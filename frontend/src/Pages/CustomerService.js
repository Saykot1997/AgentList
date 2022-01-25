import React, { useEffect, useState } from 'react';
import TopBarLogo from '../Components/TopBarLogo';
import Menubar from '../Components/Menubar';
import CustomerServiceTable from '../Components/CustomerServiceTable';
import axios from 'axios';
import { Host } from '../Data';

function CustomerService() {

    const [customerService, setCustomerService] = useState(null);

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
        <div className='w-[850px] mt-0 mx-auto min-h-full'>
            <TopBarLogo />
            <Menubar />

            <div className=' w-full flex justify-center items-center my-3'>
                <div className=' w-[850px] bg-gray-700  rounded-md shadow '>
                    <h2 className=' p-2 text-slate-300 font-semibold text-center'>Betbuzz CUSTOMER SERVICE LIST (TIME 10AM TO 10PM)</h2>
                    <p className=' text-center text-sm text-slate-300 p-3'>কাস্টমার সার্ভিসে হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ করা যাবে না এবং কাউকে আপনার একাউন্টের পাসওয়ার্ড দিবেন না</p>
                </div>
            </div>
            <CustomerServiceTable customerService={customerService} />
        </div>
    )
}

export default CustomerService;
