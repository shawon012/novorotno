import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h4>Go Back to home</h4>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Notfound;