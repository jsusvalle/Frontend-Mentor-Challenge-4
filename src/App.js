import React from 'react';
import SeeJobs from './components/SeeJobs';
import Filter from './components/Filter';

import ListingProvider from './context/ListingContext';

function App() {

  return (
    <ListingProvider>
      <div className="bg-LightGrayishCyanBG">
            <div className="background-top h-48 bg-DarkCyan bg-center bg-cover"></div>
            <Filter />

        <div className="container mx-auto pt-6 px-4 lg:px-24">
            <SeeJobs />
        </div>
      </div>
    </ListingProvider>
    
  );
}

export default App;
