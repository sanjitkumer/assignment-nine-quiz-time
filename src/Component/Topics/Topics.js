import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';

const Topics = () => {
    const loaderData = useLoaderData();
    const topicsData = loaderData.data

    return (
    <div className='px-4 py-16 mx-auto '>
            <div>
                {topicsData.map(data =>(
                    <Data key = {data.id} data = {data}></Data>
                ))}
            </div>    

     </div>
    );
};

export default Topics;