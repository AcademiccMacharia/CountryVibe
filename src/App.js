import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Products from './components/Products';
import { useState } from 'react';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };
  
  const handleSearch = (term) => {
    setSearchValue(term);
  };

  return (
    <div className="App">
      <Navbar />
      <Search onRegionSelect={handleRegionSelect} onSearch={handleSearch} />
      <Products selectedRegion={selectedRegion} searchValue={searchValue}/>
    </div>
  );
}

export default App;
