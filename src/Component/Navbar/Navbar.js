import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link className='mr-5 font-bold' to='/'>Home</Link></li>
        <li><Link className='mr-5 font-bold' to='/topics'>Topics</Link></li>
        <li><Link className='mr-5 font-bold' to='/statistics'>Statistics</Link></li>
        <li><Link className='mr-5 font-bold' to='/blog'>Blog</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Quiz Time</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link className='mr-5 font-bold' to='/'>Home</Link></li>
        <li><Link className='mr-5 font-bold' to='/topics'>Topics</Link></li>
        <li><Link className='mr-5 font-bold' to='/statistics'>Statistics</Link></li>
        <li><Link className='mr-5 font-bold' to='/blog'>Blog</Link></li>
    </ul>
  </div>
  
</div>
       
    );
};
{/* <nav className='bg-gray-800 py-6 flex items-center justify-between'>
                <h1 className='text-white font-bold text-3xl ml-5'>Quiz Time</h1>
                <div className='flex text-white'>
                <Link className='mr-5 font-bold' to='/'>Home</Link>
                <Link className='mr-5 font-bold' to='/topics'>Topics</Link>
                <Link className='mr-5 font-bold' to='/statistics'>Statistics</Link>
                <Link className='mr-5 font-bold' to='/blog'>Blog</Link>
                </div>
             </nav> */}


export default Navbar;