import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Products from './components/Products';
import SingleCountry from './components/SingleCountry';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleSearch = (name) => {
    setSearchValue(name);
  };

  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
};

export default App;
