import React from 'react';
import { Link } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import useDarkmod from '../hooks/Darkmod';

function TopBarLogo() {

    const [colorTheme, setTheme] = useDarkmod();

    return (
        <div className=' w-full h-20 flex justify-center items-center'>
            <Link to="/" className=' bg-white dark:bg-gray-700 shadow rounded-md p-3 cursor-pointer'>
                <p className=' text-blue-500 font-semibold text-xl'>Betbuzz365.site</p>
            </Link>
            <div onClick={() => { setTheme(colorTheme) }} className=' fixed top-10 right-10 cursor-pointer z-[10]'>
                {
                    colorTheme === 'light' && <BsSun className=' text-xl text-white ' />
                }
                {
                    colorTheme === 'dark' && <BsFillMoonFill className=' text-xl' />
                }

            </div>
        </div>
    )
}

export default TopBarLogo;
