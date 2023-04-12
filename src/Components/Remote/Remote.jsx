import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppliedEach from '../AppliedEach/AppliedEach';

const Remote = () => {
    const remoteJob = useLoaderData();
    // console.log(remoteJob)
    return (
        <div className='app-div'>
            <div className='applied-jobe'>
                <h1>Applied Jobs</h1>
            </div>
            <div className='btn-div'>
                <Link to="/onsite"> <button className='btn-site'>Onsite</button></Link>
                <Link to="/remote"> <button className='btn-site'>Remote</button></Link>
            </div>
            <div className='ownjob-div'>
          {
                remoteJob.map(jb => 
                    <AppliedEach
                    key={jb.id}
                    jb={jb}
                    

                    ></AppliedEach>
                    )
                
            }
          </div>
        </div>
    );
};

export default Remote;