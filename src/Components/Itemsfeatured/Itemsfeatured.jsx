import React, { useEffect, useState } from 'react';
import './Itemsfeatured.css'
import Job from '../Job/Job';

const Itemsfeatured = () => {
    const [jobs, setJobs] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } ,[])
    


    return (
        <div>
            <div>
                <p className='title-1'>Featured Jobs</p>
                <p className='title-2'>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            </div>
            <div>
                <div className='job-container'>
                    {jobs.slice(0, displayCount).map(
                        job => <Job
                        key={job.id}
                        job={job}
                        ></Job>
                    )}
                </div>
                <div className='btn-showall'>
                    <button  onClick={() => setDisplayCount(jobs.length)}>Show all</button>
                </div>
            </div>
        </div>
    );
};

export default Itemsfeatured;