import { React, useEffect, useState } from 'react'

const Products = () => {

  //fetch products from Rest api
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(json => setCountries(json))
      .catch(error => console.error('Error fetching countries:', error));
  }, [])

return (
<div className='products'>
  {countries.map(country => (
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