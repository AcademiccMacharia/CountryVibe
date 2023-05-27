import React from 'react'
import { ReactComponent as Sun } from './Sun.svg'
import { ReactComponent as Moon } from './Moon.svg'

const DarkMode = () => {
  return (
    <div className='dark_mode'>
        <input className='light_change_input' type='checkbox' id='darkmode-toggle'
        />
        <label className='light_change_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
        </label>
    </div>
  )
}

export default DarkMode