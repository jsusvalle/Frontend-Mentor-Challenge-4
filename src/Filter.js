import React from 'react'

//! BUILDING

const Filter = () => {
    return (  
        <div className="container mx-auto relative -top-3 rounded bg-white h-24 w-5/6">
            <div className="flex items-center">
                <p>JavaScript</p><button className="remove-item-filter"></button>
            </div>
        </div>
    );
}

export default Filter;