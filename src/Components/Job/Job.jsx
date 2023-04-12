import React from 'react';
import './Job.css';
import { Link, unstable_HistoryRouter } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';



const Job = ({job}) => {
    const{companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrParttime, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation, id} =job
    return (
        <div >
            <div className='each-job'>
                <div>
                <img src={companyLogo} alt="" />
                </div>
                <div className='job-title'>
                <h4>{jobTitle}</h4>
                <small>{companyName}</small>
                </div>
                <div className='remote-full'>
                    <div>{remoteOrOnsite}</div>
                    <div>{fulltimeOrParttime}</div>
                </div>
                <div>
                    <div className='img-location'>
                        <img src="/src/assets/Icons/Location Icon.png" alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='img-salary'>
                        <img src="/src/assets/Icons/Frame.png" alt="" />
                        <p>{salary}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/job-details/${id}`} ><button className='btn-view'>View Details</button>
                    </Link>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default Job;