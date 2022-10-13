import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';
import Header from '../Header/Header';

const Topics = () => {
    const loaderData = useLoaderData();
    const topicsData = loaderData.data
    console.log(topicsData)
    return (
        <div>
            <Header></Header>
                <div className='bg-slate-200 grid gap-6 w-10/12 lg:w-9/12 m-auto lg:grid-cols-4 sm:grid-cols-1'>
                    {topicsData.map(data =>(
                        <Data key = {data.id} data = {data}></Data>
                    ))}
                </div>
     </div>
    );
};

export default Topics;