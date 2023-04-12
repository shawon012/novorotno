import { useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";


const jobsLoader = async() => {
    const loadedJobs = await fetch('../../public/jobs.json');
    const jobs = await loadedJobs.json();
    // console.log(jobs)
    const storedJobs = getShoppingCart();
    // console.log(storedJobs);
    const savedJobs = [];
    for(const id in storedJobs){
        // console.log(id)
        const addedJobs = jobs.find(pd => pd.id == id);
        // console.log(addedJobs);
        savedJobs.push(addedJobs);
        
    }
    return savedJobs;
   
}

export default jobsLoader;