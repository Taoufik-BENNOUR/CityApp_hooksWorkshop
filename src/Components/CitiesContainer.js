import React from 'react';
import CityCard from './CityCard'

function CitiesContainer({cities}) {
  return <div style={{display:'flex',flexWrap:"wrap",justifyContent:'space-between',margin:"50px 10%"}}>
    {cities.map(city=> <CityCard city={city} key={city.id}/> )}
  </div>;
}

export default CitiesContainer;
