import React, { useState } from 'react';
import Options from './Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
  

const Quizquestion = ({questions}) => {
    const [show,setShow]= useState(true)
    return (
        <div className='bg-slate-100 w-9/12 mx-auto mt-4 p-6'>
            <h1 className='text-2xl m-4'>{questions.question}</h1>
            {questions.options.map((option,index) => <Options key = {index} option={option}></Options>)}

        <div onClick={()=> setShow(!show)} >
            {show ? <p><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </p> : <p><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon></p>}
            

        </div>
            {!show ?  <p className='fond-bold text-green-500'>Correct Answer: {questions.correctAnswer}</p>:undefined}
            
           
        </div>
    );
};

export default Quizquestion;