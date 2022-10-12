import React from 'react';

const Blog = () => {
    return (
        <div className='bg-sky-300 mt-0 pt-8'>
           <div>
            <h2 className='text-left my-2 mx-6 mt-0'>1. What is a purpose of react router?</h2>
            <p className=' text-left mx-6'>Ans:React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
           </div>
           <div className='pt-8'>
            <h2 className='text-left my-2 mx-6 mt-0'> 2. How does context API work?</h2>
            <p className='text-left my-4 mx-6 mt-0'>Ans:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
           </div>
           <div className='pt-8 pb-6'>
            <h2 className='text-left my-2 mx-6 mt-0'> 3.What is useRef Hook?</h2>
            <p className='text-left my-4 mx-6 mt-0'>Ans:The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            <br />
            useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.    
            </p>
           </div>
        </div>
    );
};

export default Blog;