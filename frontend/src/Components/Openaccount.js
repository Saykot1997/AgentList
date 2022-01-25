import React from 'react';

function Openaccount() {
    return (
        <div className=' w-full flex justify-center items-center mb-5'>
            <div className=' bg-gray-700 rounded-md shadow '>
                <div className=' w-full p-4 bg-gray-600 rounded-md'>
                    <h2 className=' text-center text-slate-300 text-3xl font-semibold'>কিভাবে একাউন্ট খুলবেনঃ</h2>
                </div>
                <div className=' p-8 flex justify-center items-center'>
                    <div className='p-4 bg-gray-600 flex justify-between items-center'>
                        <p className=' text-base text-slate-300'>একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো পড়া জরুরী।</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Openaccount;
