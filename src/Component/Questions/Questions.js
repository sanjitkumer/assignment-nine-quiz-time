import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
  const data = useLoaderData();
  const {id,questions} = data;
    return (
        <div>
            <h2>This is question: {id} </h2>
            <h4> Question: {questions.options}</h4>

            {/* <div>
                <div>
                {questionsData.map(data =>(
                    <Data key = {data.id} data = {data}></Data>
                ))}
                </div>
            </div> */}
            
        </div>
    );
};

export default Questions;