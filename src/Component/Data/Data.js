import React from 'react';
import { Link } from 'react-router-dom';

const Data = ({data}) => {
    const {id, name, logo} = data
    return (
        <div className='card w-96 bg-sky-200 shadow-x'>
          <div className="card-body">
                   <img src= {logo} alt="" />
               <div className="card-actions justify-end">
                  <p>{name} </p> 
                  
                 <Link to ={`/questions/${id}`}>
                 <button className ="btn btn-primary">Start quiz time</button>
                 </Link>
               </div>  
         </div>            
        </div>
    );
};

export default Data;