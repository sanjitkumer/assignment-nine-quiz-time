import React from 'react';

const Header = () => {
    return (
        <div className='w-auto h-56  border-4 border-gray-50 rounded-lg bg-slate-200  flex justify-center'>
        <div className='mr-6 mt-3'>
        <img className='w-50 h-40' src="https://img.freepik.com/premium-vector/quiz-time-blue-banner-3d-style-white-background-vector-illustration_123447-1768.jpg?w=2000" alt=""/>
       </div>
       <div className='mr-6 w-6/12 mt-3'>
        <p> Quiz: A form of entertainment often used on radio or television in which the members of a panel compete in answering questions.</p>
       </div>
    </div>
    );
};

export default Header;