import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {    
   const loaderData = useLoaderData()
   const statistics = loaderData.data
   console.log(statistics)


    return (     
         <div className='bg-gray-600 w-full md:w-9/12 h-96 mx-auto md:mt-44'> 
         <h2 className='text-4xl my-5 text-center fond-bold text-green-500'>Quiz Chart</h2>
         <ResponsiveContainer>
                <LineChart data={statistics} margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{r: 8}} />
                </LineChart> 
            </ResponsiveContainer> 
         </div>        
    
    );
};

export default Statistics;