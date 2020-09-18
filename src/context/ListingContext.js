import React, {createContext, useEffect, useState} from 'react';

import data from '../data/data.json'

export const ListingContext = createContext();

const ListingProvider = (props) => {

    const [jobs, setJobs] = useState([]);
    const [filterjobs, setFilterJobs] = useState([]);
    const [filteredjobs, setFilteredJobs] = useState([]);

    useEffect( () => {
        const showDB = async () => {
            const result = await data.users;
            setFilteredJobs(result);
            setJobs(result);
        }
        showDB();
    }, []);

    useEffect(() => {
        const filteredJobs = jobs.filter(filterFunc);
        setFilteredJobs(filteredJobs);
        // eslint-disable-next-line
    }, [filterjobs]);
        
    const filterFunc = ({role,level,tools,languages}) => {
        if(filterjobs.length === 0) {
            return true
        }

        const tags = [role, level];

        if(tools) {
            tags.push(...tools);
        }

        if(languages) {
            tags.push(...languages);
        }

        return filterjobs.every(filter => tags.includes(filter));
    };

    const handleTagClick = (tag) => {
        if(filterjobs.includes(tag)) return;

        setFilterJobs([...filterjobs, tag]);
    };

    const handleFilterClick = (passedFilter) => {
        setFilterJobs(filterjobs.filter((f) => f !== passedFilter));
    };

    const cleanFilters = () => {
        setFilterJobs([]);
    };

    return (
        <ListingContext.Provider
            value={{
                filteredjobs,
                filterjobs,
                handleTagClick,
                handleFilterClick,
                cleanFilters
            }}
        >
            {props.children}
        </ListingContext.Provider>
    )
}

export default ListingProvider;