import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const jobs = useLoaderData()
    const { companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrParttime, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation, id } = jobs;
    return (
        <div className='job-all'>
            <div className='title-job-details'>
                <h1>Job Details</h1>
            </div>
            <div className='job-des-contaoner'>
                <div className='first-div-job'>
                    <div className='gap-gap'>
                        <span className='job-details-se'>Job Description: </span>
                        <span className='job-details-pe'>{jobDescription}</span>
                    </div>
                     
                    <div className='gap-gap'>
                        <span className='job-details-se'>Job Responsibility: </span>
                        <span className='job-details-pe'>{jobResponsibility}</span>
                    </div> 
                    
                    <div className='gap-gap'>
                    <span className='job-details-se'>Educational Requirements: </span> <br />
                    <span className='job-details-pe'>{educationalRequirements}</span> <br />
                    </div>

                    <div className='gap-gap'>
                    <span className='job-details-se'>Experiences: </span> <br />
                    <span className='job-details-pe'>{experiences}</span>
                    </div>
                </div>
                <div>
                    <div className='second-div-job'>
                        <span className='job-details-s'>Job Details</span> <br />
                        <hr className='hr-hr' />
                        <span className='job-details-e'>
                            <span> <img src="/src/assets/Icons/Frame.png" alt="" /> </span>
                            <span className='job-details-p'> Salary: {salary} (Per Month)</span>
                        </span>
                        <span className='job-details-e'>
                            <span> <img src="/src/assets/Icons/Frame-1.png" alt="" /> </span>
                            <span className='job-details-p'> Job Title: {jobTitle} </span> <br />
                        </span> <br />
                        <span className='job-details-s'>Contact Information</span>
                        <hr className='hr-hr' />
                        <span className='job-details-e'>
                            <span> <img src="/src/assets/Icons/Frame-2.png" alt="" /> </span>
                            <span className='job-details-p'> Phone: {contactInformation.phone} </span>
                        </span>
                        <span className='job-details-e'>
                            <span> <img src="/src/assets/Icons/Frame-3.png" alt="" /> </span>
                            <span className='job-details-p'> Email: {contactInformation.email} </span>
                        </span>
                        <span className='job-details-e'>
                            <span> <img src="/src/assets/Icons/Frame-4.png" alt="" /> </span>
                            <span className='job-details-p'> Address: {location} </span> <br />
                        </span>

                    </div>
                    <button onClick={() => addToDb(id)} className='btn-apple-now'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;