import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Options from '../Options/Options';
import Quizquestion from '../Quizquestion';


const Questions = () => {
    const loaderData = useLoaderData();
    const questions =loaderData.data.questions;
    
    

    return (
        <div className='m-6 p-6 bg-sky-200'>
            <h1>Quiz of {loaderData.data.name}</h1>
            <div className='text-center'>
                {
                    questions.map((question,index) =><Quizquestion key ={question.id} questions = {question}></Quizquestion> )
                }
            </div>
            
          
                
            
           
        </div> 
    );
};

export default Questions;