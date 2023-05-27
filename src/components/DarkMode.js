import React from 'react'
import { ReactComponent as Sun } from './Sun.svg'
import { ReactComponent as Moon } from './Moon.svg'

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('dark-theme', 'dark');
        localStorage.setItem("selectedTheme", 'dark');
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('dark-theme', 'light');
        localStorage.setItem("selectedTheme", 'light');
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };
    const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
    return (
        <div className='dark_mode'>
            <input className='light_change_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'}
            />
            <label className='light_change_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    )
}
export default DarkMode