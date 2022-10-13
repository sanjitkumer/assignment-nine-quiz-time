import React from 'react';

const Options = ({option,cheekAns}) => {
    
    return (
        <div  onClick={()=> cheekAns(option)} className='cursor-pointer bg-red-200 text-center m-2 p-4'>
            <p>{option}</p>
        </div>
    );
};

export default Options;