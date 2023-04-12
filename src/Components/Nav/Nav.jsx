import React from 'react';
import { Link } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import Blog from '../Blog/Blog';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <div className='nav-container'>
                <div>
                    
                    <Link className='link' to="/" ><h2>Route Job hunt</h2></Link>
                </div>
                <div className='link-nav'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/statistics">Statistics</Link>
                    <Link className='link' to="/applied-jobs">Applied Jobs</Link>
                    <Link className='link' to="/blog">Blog</Link>
                </div>
                <div>
                    <Link to="/applied-jobs"><button className='btn-apply'>Apply Now</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;