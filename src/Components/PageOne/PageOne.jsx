import React from 'react';
import './PageOne.css'
import Jobcatagory from '../Jobcatagory/Jobcatagory';
import Intro from '../Intro/Intro';
import Itemsfeatured from '../Itemsfeatured/Itemsfeatured';

const PageOne = () => {
    return (
        <div className="page-one-container">
            <Intro></Intro>
            <Jobcatagory></Jobcatagory>
            <Itemsfeatured></Itemsfeatured>
        </div>
    );
};

export default PageOne;