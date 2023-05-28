// CountryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from './CountryInfo';

const CountryPage = () => {
  const { id } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {

    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/${id}`);
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [id]);

  return (
    <div className="country-page">
      {countryData && <CountryInfo country={countryData} />}
    </div>
  );
};

export default CountryPage;
