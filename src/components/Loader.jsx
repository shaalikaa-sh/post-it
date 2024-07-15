import React from 'react';
import '../assets/css/animations.scss';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;
