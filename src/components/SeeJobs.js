import React, {useContext} from 'react';
import CardAds from './CardAds';

import {ListingContext} from '../context/ListingContext';

const SeeJobs = () => {

    const {filteredjobs } = useContext(ListingContext);

    return (  
        <>
            {filteredjobs.map(card => ( 
                <CardAds
                    key={card.id}
                    card={card}
                />
            ))}
        </>
    );
}

export default SeeJobs;