import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='div-hook'>
            <div className='div-context'>
                <h3>When shoul we use context api?</h3>
                <p>In many time we should use context api. If we need data in many component but this data can change any time so then we need to use context api. If we need to use data in a very inside component then passing data will be very tough. So at that context we should use context api.</p>
            </div>
            <div className='div-context'>
                <h3>What is custom hook?</h3>
                <p>Basically custom hook is a javascript function. By using custom hook we can use stateful logic across different component. By using custom hook we can fetch data from api. We can also manage global effect using custom hook.</p>
            </div>
            <div className='div-context'>
                <h3>What is use ref?</h3>
                <p>By using use ref we can access the current value of a dom element. We can use mutable value using use ref. We can also catch a value between renders using use ref.</p>
            </div>
            <div className='div-context'>
                <h3>What is use memo?</h3>
                <p>The useMemo hook takes two arguments: a function that calculates the memoized value, and an array of dependencies that the function relies on. If any of the dependencies change, the function will be re-run to recalculate the memoized value. If the dependencies don't change, the memoized value will be returned without running the function again. </p>
            </div>
        </div>
    );
};

export default Blog;