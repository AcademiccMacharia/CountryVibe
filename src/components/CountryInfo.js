// CountryInfo.js
import React from 'react';

const CountryInfo = ({ country }) => {
  return (
    <div className="country-info">
      <img src={country.flags.png} alt={country.name} />
      <div className="product-info">
        <h3>{country.name}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryInfo;
