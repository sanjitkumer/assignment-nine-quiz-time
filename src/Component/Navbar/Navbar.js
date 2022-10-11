import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <nav className='bg-gray-800 py-6 flex items-center justify-between'>
                <h1 className='text-white font-bold text-3xl ml-5'>Quiz Time</h1>
                <div className='flex text-white'>
                <Link className='mr-5 font-bold' to='/'>Home</Link>
                <Link className='mr-5 font-bold' to='/topics'>Topics</Link>
                <Link className='mr-5 font-bold' to='/statistics'>Statistics</Link>
                <Link className='mr-5 font-bold' to='/blog'>Blog</Link>
                </div>
             </nav>

        </div>
       
    );
};

export default Navbar;