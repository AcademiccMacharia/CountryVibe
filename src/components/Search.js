import { React, useState } from 'react'
import { FaSearch } from 'react-icons/fa'


const Search = () => {

    const [selectedValue, setSelectedValue] = useState('option1');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className='search-filter'>
            <div className='search'>
                <input className="search-input" placeholder='Search for a country..' />
                <FaSearch className='search-icon' />
            </div>

            <div className='filter'>
                <select value={selectedValue} onChange={handleSelectChange} className="filter-select">
                    <option className="option" hidden >Filter By Region</option>
                    <option className="option" value='Africa'>Africa</option>
                    <option className="option" value='America'>America</option>
                    <option className="option" value='Asia'>Asia</option>
                    <option className="option" value='Europe'>Europe</option>
                    <option className="option" value='Oceania'>Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Search