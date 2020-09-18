import React, {useContext} from 'react'

import {ListingContext} from '../context/ListingContext';

const Filter = () => {

    const {filterjobs, handleFilterClick, cleanFilters} = useContext(ListingContext);

    return (  
        <>
        {filterjobs.length > 0 && (
            <div className="container mx-auto relative -top-3 rounded bg-white w-4/5 p-4 flex">
                <div className="w-3/4 flex flex-wrap">
                    {filterjobs.map(job => (
                            <div className="flex items-center m-2">
                                <p className="font-bold text-DarkCyan bg-LightGrayishCyanFil rounded-l-lg p-2">{job}</p><button className="remove-item-filter bg-DarkCyan transition duration-500 ease-in-out hover:bg-VeryDarkGrayishCyan hover:text-white"
                                    onClick={() => handleFilterClick(job)}
                                ></button>
                            </div>
                    ))}
                </div>
                <div className="w-1/4 flex justify-end items-center">
                    <button className="text-DarkGrayishCyan text-lg font-bold mr-2 transition duration-500 ease-in-out border-b-2 border-DarkCyan border-opacity-0 hover:border-opacity-100 hover:text-DarkCyan"
                        onClick={cleanFilters}
                    >Clear</button>
                </div>
            </div>
        )}
        </>
    );
}

export default Filter;