import React from 'react';
import './Jobcatagory.css'

const Jobcatagory = () => {
    return (
        <div className='job-catagory-container'>
            <div className='t-div-o'>
                <p className='title-1'>Job Catagory List</p>
                <p className='title-2'>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            </div>
            <div className='div-container-img'>
                <div className='div-img'>
                    <img src="/src/assets/Icons/accounts 1.png" alt="" />
                    <h4>Account and finance </h4>
                    <small>300+ Jobs Available</small>
                </div>
                <div className='div-img'>
                    <img src="/src/assets/Icons/business 1.png" alt="" />
                    <h4>Creative Design</h4>
                    <small>150 Jobs Available</small>
                </div>
                <div className='div-img'>
                    <img src="/src/assets/Icons/social-media 1.png" alt="" />
                    <h4>Marketing and Sales</h4>
                    <small>100+ Jobs Available</small>
                </div>
                <div className='div-img'>
                    <img src="/src/assets/Icons/chip 1.png" alt="" />
                    <h4>Engineering Jobs</h4>
                    <small>224 Jobs Available</small>
                </div>
            </div>
        </div>
    );
};

export default Jobcatagory;