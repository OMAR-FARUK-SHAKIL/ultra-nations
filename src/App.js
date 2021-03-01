import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries,setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  const handleAddCountry = (props) =>{
    console.log('Country added..!',props);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>countries loaded: {countries.length}</h1>
        <h1>Name of countries: </h1>
        <ul>
          {
            countries.map(country => 
              <Country country = {country} 
                handleAddCountry = { () => handleAddCountry(country)}>
              </Country> )
          }
        </ul>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
