import React from 'react';
import { NavLink } from 'react-router-dom';

function AgentList() {
    return (
        <div className=' w-full flex justify-center items-center mb-5'>
            <div className=' w-full bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-600 rounded-md'>
                    <h2 className=' text-center text-slate-300 text-3xl font-semibold'>এজেন্ট লিস্টঃ</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    <div className='p-4 bg-gray-600'>
                        <p className=' text-base text-slate-300'>একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অবথা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।

                        </p>
                        <NavLink to="/onlineMasterAgent" className={"text-center block underline mt-1 text-blue-600"}>অনলাইন মাষ্টার এজেন্ট লিস্টঃ</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentList;
