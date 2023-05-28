import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Products from './components/Products';
import SingleCountry from './components/SingleCountry';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <Search
                  onRegionSelect={handleRegionSelect}
                  onSearch={handleSearch}
                />
                <Products
                  selectedRegion={selectedRegion}
                  searchValue={searchValue}
                />
              </>
            }
          />
          <Route exact path="/countries/:name" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
