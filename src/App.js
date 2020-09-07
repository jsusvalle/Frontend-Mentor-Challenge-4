import React, {useState, useEffect} from 'react';
import CardAds from './CardAds';
import Filter from './Filter';

function App() {

  const [data, saveData] = useState([]);

  useEffect( () => {
    const mostrarDB = async () => {
      const response = await fetch('http://localhost:4000/users');
      const result = await response.json();
      saveData(result);
    }
    mostrarDB();
  }, [])
  
  if(Object.keys(data).length === 0) return null;

  return (
    <div className="bg-LightGrayishCyanBG">
      <div className="background-top h-48 bg-DarkCyan bg-center bg-cover"></div>
      <Filter />

      <div className="container mx-auto pt-6 px-4 lg:px-24">
        {data.map(card => ( 
            <CardAds
              key={card.id}
              card={card}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
