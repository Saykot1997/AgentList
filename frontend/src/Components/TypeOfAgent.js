import React from 'react';
import { NavLink } from 'react-router-dom';

function TypeOfAgent() {
    return (
        <div className=' w-full flex justify-center items-center mb-5'>
            <div className=' w-full bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-600 rounded-md'>
                    <h2 className=' text-center text-slate-300 text-3xl font-semibold'>এজেন্ট কয় প্রকারঃ</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    <div className='p-4 bg-gray-600'>
                        <p className=' text-base text-slate-300 text-center'> <NavLink to={"/superAgent"} className={"underline text-blue-600 mr-2"}>অনলাইন সুপার এজেন্ট লিস্টঃ</NavLink> সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি এডমিন কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে।</p>
                        <p className=' text-base text-slate-300 text-center mt-2'> <NavLink to={"/onlineMasterAgent"} className={"underline text-blue-600 mr-2"}>অনলাইন মাষ্টার এজেন্ট লিস্টঃ</NavLink>  অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে।</p>
                        <p className=' text-base text-slate-300 text-center mt-2'> লোকাল মাষ্টার এজেন্ট লিস্টঃ লোকাল মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কিন্তু তাদের সাথে লেনদেন প্রতিটি ইউজার কে নিজ দায়িত্বে লেনদেন করতে হবে। তাদের নামে কোন অভিযোগ কারো কাছে করা যাবে না।</p>
                        <p className=' text-base text-slate-300 text-center mt-2'> লোকাল মাষ্টার এজেন্টঃ এই সব এজেন্ট সাধারনত – নিজের এলাকায় বা পরিচিত দের সাথে লেনদেন করে । যারা আগে বাজি ধরিয়ে দিত, তাদের কেই মুলত লোকাল এজেন্ট দেয়া হয়েছে। লোকাল এজেন্ট রা অনলাইনে আসে না এবং তারা তাদের পরিচয় গোপন রাখতে চায়। লোকাল এজেন্ট দের সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন না, আর করে থাকলে তার দায়ভার পুরোটাই আপনার।</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeOfAgent;
