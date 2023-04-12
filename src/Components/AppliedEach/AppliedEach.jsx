import React, { useState } from 'react';
import './AppliedEach.css'
import { Link } from 'react-router-dom';

const AppliedEach = ({ jb }) => {

    // const [myjobs, setMyjobs] = useState(jb)
    const { companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrParttime, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation, id } = jb;
    return (
        <div className='my-job-parent'>
            <div className='my-job'>
                <div className='my-job-child'>
                    <div className='img-coon'><img src={companyLogo} alt="" /></div>
                    <div>
                        <span><h3>{jobTitle}</h3></span>
                        <span><p>{companyName}</p></span>
                        <span>
                            <span className='remo-on' >{remoteOrOnsite}</span>
                            <span className='remo-on' >{fulltimeOrParttime}</span>
                        </span> <br />
                        <span className='img-text-parent'>
                            <span className='img-text'>
                                <span><img src='/src/assets/Icons/Frame-4.png' alt="" /></span>
                                <span>{location}</span>
                            </span>
                            <span className='img-text'>
                                <span><img src='/src/assets/Icons/Frame.png' alt="" /></span>
                                <span>{salary}</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div>
                    <Link to={`/job-details/${id}`}><button className='btn-view' >View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default AppliedEach;