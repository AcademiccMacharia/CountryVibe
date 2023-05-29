import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ onRegionSelect, onSearch }) => {
  const [selectedValue, setSelectedValue] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const handleSelectChange = (event) => {
    const region = event.target.value;
    setSelectedValue(region);
    onRegionSelect(region);
  };

  const searchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchValue}`
      );
      const data = await res.json();
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchCountry();
  };

  return (
    <div className='search-filter'>
      <div className='search'>
        <form onSubmit={submitHandler}>
          <input
            className='search-input'
            placeholder='Search for a country..'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type='submit' className='search-icon'>
            <FaSearch />
          </button>
        </form>
      </div>
      <div className='filter'>
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className='filter-select'
        >
          <option className='option' hidden value='all'>
            Filter By Region
          </option>
          <option className='option' value='Africa'>
            Africa
          </option>
          <option className='option' value='Americas'>
            America
          </option>
          <option className='option' value='Asia'>
            Asia
          </option>
          <option className='option' value='Europe'>
            Europe
          </option>
          <option className='option' value='Oceania'>
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
};

export default Search;
