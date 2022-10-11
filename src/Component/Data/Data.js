import React from 'react';

const Data = ({data}) => {
    const {id, name, logo, total} = data
    return (
        <div>
            <a href={`../data/${id}`}></a>
           <img src= {logo} alt="" />
           <p>{name} </p> 
           <p>{total} </p>
        </div>
    );
};

export default Data;