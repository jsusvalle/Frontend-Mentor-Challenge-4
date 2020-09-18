import React, {useContext} from 'react'

import {ListingContext} from '../context/ListingContext';

const CardAds = ({card}) => {

    let classNameCard;
    const {company, logo, featured, position, role, level, postedAt, contract, location, languages, tools} = card;

    const { handleTagClick } = useContext(ListingContext);

    if(card.new && featured) {
        classNameCard = 'border-l-4 border-DarkCyan';
    }

    return ( 
        <div className={`shadow rounded bg-white mb-16 pb-4 relative md:grid md:grid-cols-6 md:items-center ${classNameCard}`}>
            <img className="absolute md:static -top-2 left-15 w-16 md:w-24 md:ml-auto md:mr-2" src={process.env.PUBLIC_URL + logo} alt=""/>
            <div className="pt-10 mx-6 md:col-span-3">
                <div className="flex font-bold items-center">
                    <h2 className="text-DarkCyan">{company}</h2>
                    {card.new ? <p className="ml-3 px-2 py-1 bg-DarkCyan rounded-full text-white text-sm">NEW!</p> : null}
                    {featured ? <p className="ml-3 px-2 py-1 bg-VeryDarkGrayishCyan rounded-full text-white text-sm">FEATURED!</p> : null}
                </div>
                <h3 className="font-bold text-xl">{position}</h3>
                <div className="flex mt-2 mb-2 md:border-0 border-b border-gray-500 pb-3">
                    <p className="text-DarkGrayishCyan mr-2">{postedAt}</p>
                    <p className="after-infoAdd mr-2">{contract}</p>
                    <p className="after-infoAdd">{location}</p>
                </div>
            </div>
            <div className="mx-6 md:col-start-5 md:col-span-2">
                <button className="button-filter transition duration-500 ease-in-out hover:bg-DarkCyan hover:text-white"
                    onClick={() => handleTagClick(role)}
                >
                    <p>{role}</p>
                </button>
                <button className="button-filter transition duration-500 ease-in-out hover:bg-DarkCyan hover:text-white"
                    onClick={() => handleTagClick(level)}
                >
                    <p>{level}</p>
                </button>
                {languages.map(language => (
                    <button className="button-filter transition duration-500 ease-in-out hover:bg-DarkCyan hover:text-white"
                        onClick={() => handleTagClick(language)}
                        key={language}>
                        <p>{language}</p>
                    </button>
                ))}
                {tools.map(tool => (
                    <button className="button-filter transition duration-500 ease-in-out hover:bg-DarkCyan hover:text-white" 
                        onClick={() => handleTagClick(tool)}
                        key={tool}>
                        <p>{tool}</p>
                    </button>
                ))}
            </div>
        </div>
        
    );
}

export default CardAds;