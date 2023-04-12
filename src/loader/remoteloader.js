import { useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";


const remoteloader = async() => {
    const loadedJobs = await fetch('../../public/jobs.json');
    const jobs = await loadedJobs.json();
    // console.log(jobs)
    const storedJobs = getShoppingCart();
    // console.log(storedJobs);
    const savedJobs = [];
    for(const id in storedJobs){
        // console.log(id)
        const addedJobs = jobs.find(pd => pd.id == id);
        if(addedJobs.remoteOrOnsite === 'Remote'){
            savedJobs.push(addedJobs);
        }
        
        
    }
    return savedJobs;
   
}

export default remoteloader;