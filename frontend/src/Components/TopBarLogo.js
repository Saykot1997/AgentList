import React from 'react';
import { Link } from 'react-router-dom';

function TopBarLogo() {

    return (
        <div className=' w-full h-20 flex justify-center items-center'>
            <Link to="/" className=' bg-gray-500 shadow rounded-md p-3 cursor-pointer'>
                <p className=' text-gray-200 font-semibold text-xl'>Betbuzz365.site</p>
            </Link>
        </div>
    )
}

export default TopBarLogo;
