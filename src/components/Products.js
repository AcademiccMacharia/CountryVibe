import { React, useEffect, useState } from 'react'


const countries_url = 'https://restcountries.com/v3.1';
const Products = ({selectedRegion}) => {

  //fetch products from Rest api
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`${countries_url}/all`);

        if (!res.ok) throw new Error('Failed to fetch countries.');

        const results = await res.json();
        setCountries(results);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
  selectedRegion === 'all' ? true : country.region === selectedRegion
);


return (
<div className='products'>
  {filteredCountries.map(country => ( 
    <div className='product' key={country.id}>
      <img src={country.flags.png} alt={country.name.common} />
      <div className='product-info'>
        <h3>{country.name.common}</h3>
        <p>
                  {" "}
                  <span>Population: </span>
                  {new Intl.NumberFormat().format(country.population)}
                </p>
        <p className='region'><span>Region: </span>{country.region}</p>
        <p className='capital'><span>Capital City: </span>{country.capital}</p>
      </div>
    </div>
  ))}
</div>
)
  }

export default Products