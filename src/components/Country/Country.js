import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,capital,region,flag} = props.country;
    return (
        <div className='country-container'>
            <div className='details'>
                <h4> {name}</h4>
                <h6>Capital : {capital}</h6>
                <p>region : {region}</p>
                <p>population : {population}</p>
                <button onClick = {props.handleAddCountry} > Add Country</button>
            </div>
            <div className='flag'>
                <img src={flag} alt=""/>
            </div>
            
        </div>
    );
};

export default Country;