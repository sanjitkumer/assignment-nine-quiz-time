import React from 'react';

const Options = ({option}) => {
    
    return (
        <div className='bg-red-200 text-center p-4'>
            <p className='m-2 p-4 bg-green-300 text-2xl'>{option}</p>
        </div>
    );
};

export default Options;