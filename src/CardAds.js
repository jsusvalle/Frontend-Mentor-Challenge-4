import React, {Fragment} from 'react'

const CardAds = ({card}) => {

    const {company, logo, featured, position, role, level, postedAt, contract, location, languages, tools} = card;
    
    return ( 
        <div className="shadow rounded bg-white mb-16 pb-4 relative md:grid md:grid-cols-6 md:items-center">
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
                <button className="button-filter">
                    <p>{role}</p>
                </button>
                <button className="button-filter">
                    <p>{level}</p>
                </button>
                {languages.map(language => (
                    <button className="button-filter" 
                        key={language}>
                        <p>{language}</p>
                    </button>
                ))}
                {tools.map(tool => (
                    <button className="button-filter" 
                        key={tool}>
                        <p>{tool}</p>
                    </button>
                ))}
            </div>
        </div>
        
    );
}

export default CardAds;