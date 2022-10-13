import React from 'react';

const Header = () => {
    return (
        <div className='m-auto w-11/12 lg:w-9/12 border-4 border-gray-50 rounded-lg bg-slate-200  flex flex-col lg:flex-row justify-center'>
        <div className='w-2/4 text-center'>
        <img className='m-auto w-full lg:w-9/12' src="https://img.freepik.com/premium-vector/quiz-time-blue-banner-3d-style-white-background-vector-illustration_123447-1768.jpg?w=2000" alt=""/>
       </div>
       <div className=' m-auto w-2/4 text-center'>
        <p> Quiz: A form of entertainment often used on radio or television in which the members of a panel compete in answering questions.</p>
       </div>
    </div>
    );
};

export default Header;