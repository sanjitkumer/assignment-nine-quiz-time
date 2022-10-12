import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';

const Topics = () => {
    const loaderData = useLoaderData();
    const topicsData = loaderData.data

    return (
    <div className='bg-slate-100 mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <div className='bg-slate-200 grid gap-6 row-gap-5 m-4 lg:grid-cols-2 sm:row-gap-6 sm:grid-cols-1'>
                {topicsData.map(data =>(
                    <Data key = {data.id} data = {data}></Data>
                ))}
            </div>    

     </div>
    );
};

export default Topics;