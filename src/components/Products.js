import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ selectedRegion, searchValue }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = `All Countries`
  }, [])

  const filteredCountries = countries.filter(
    (country) =>
      (selectedRegion === 'all' || country.region === selectedRegion) &&
      country.name.common.toLowerCase().includes(String(searchValue).toLowerCase())
  );

  return (
    <div className="products">
      {filteredCountries.map((country) => (
        <div className="product" key={country.cca3}>
          <Link to={`/countries/${country.name.common}`}>
            <img src={country.flags.png} alt={country.name.common} />
          </Link>
          <div className="product-info">
            <h3>{country.name.common}</h3>
            <p>
              <span>Population: </span>
              {new Intl.NumberFormat().format(country.population)}
            </p>
            <p className="region">
              <span>Region: </span>
              {country.region}
            </p>
            <p className="capital">
              <span>Capital City: </span>
              {country.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

