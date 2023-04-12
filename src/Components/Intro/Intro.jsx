import React from 'react';
import './Intro.css'
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div>
            <div className='pgone-container'>
                <div>
                    <span className='p-container'> <p className='title'>One Step</p> </span>
                    <span className='p-container'> <p className='title'>Closer To Your</p> </span>
                    <span className='p-container'> <p className='title'>Dream Job</p> </span>
                    <div className='para-container'>
                        <span className='p-container'> <p>Explore Thousands of Job opportunity with the</p> </span>
                        <span className='p-container'> <p>information you need. Its your future. Come find it. Manage all</p> </span>
                        <span className='p-container'> <p>your job application from start to finish.</p> </span>
                    </div>
                    <span>
                        <Link to="/applied-jobs"><button className='btn-started'>Get Started</button></Link>
                        
                    </span>
                </div>
                <div className='img-container'>
                    <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;