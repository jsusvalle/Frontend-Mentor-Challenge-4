import React from 'react'

//! BUILDING

const Filter = () => {
    return (  
        <div className="container mx-auto relative -top-3 rounded bg-white w-5/6 p-4 flex">
            <div className="w-3/4 flex flex-wrap">
                <div className="flex items-center m-2">
                    <p className="font-bold text-DarkCyan bg-LightGrayishCyanFil rounded-l-lg p-2">Frontend</p><button className="remove-item-filter bg-DarkCyan"></button>
                </div>

                <div className="flex items-center m-2">
                    <p className="font-bold text-DarkCyan bg-LightGrayishCyanFil rounded-l-lg p-2">CSS</p><button className="remove-item-filter bg-DarkCyan"></button>
                </div>

                <div className="flex items-center m-2">
                    <p className="font-bold text-DarkCyan bg-LightGrayishCyanFil rounded-l-lg p-2">JavaScript</p><button className="remove-item-filter bg-DarkCyan"></button>
                </div>
            </div>
            <div className="w-1/4 flex justify-center items-center">
                <button className="text-DarkGrayishCyan text-lg">Clear</button>
            </div>
        </div>
    );
}

export default Filter;