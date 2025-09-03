import React, { useEffect, useState } from "react";
import './index.css';

function App() {
  
  const [countries, setCountries] =useState([]);

  useEffect(() => {

    const fetchCountries = async() =>{
      try{
        const response = await fetch('https://xcountries-backend.azurewebsites.net/all')
      const data = await response.json();
      setCountries(data);
      console.log(data);
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
    }
    fetchCountries();
  },[])
  

  return (
    <div style={{display:'flex', flexWrap:"wrap",gap:"10px"}}>
      {countries.map((country) => (
        <div 
        key={country.abbr}
        style={{
          border:'1px solid grey',
          borderRadius:'8px',
          textAlign:'center',
          width:'180px',
          height:'180px',
          padding:'5px',
        }}>
          <img src={country.flag} alt={country.name} 
          style={{width:'100px',height:'100px',objectFit:'cover'}}/>
          <h3 style={{fontSize:'18px'}}>{country.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
