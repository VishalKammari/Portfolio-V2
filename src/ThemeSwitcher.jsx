import React from 'react'
import { Themecontext } from './context/Themecontext'
import { useContext } from 'react'

const ThemeSwitcher = () => {
    const{theme,toggletheme}=useContext(Themecontext)
  return (
    <div className={`flex flex-col transition-all duration-300 ease-in-out gap-2 items-center justify-center w-full h-full border-2 ${theme=='dark'?'text-white bg-black':'text-black bg-white'}`}>
        <h1>Theme Switcher App</h1>
        <button onClick={toggletheme} className='cursor-pointer bg-amber-950 text-amber-50'>Change theme</button>
        <p>your current theme is :{theme}</p>
    </div>
  )
}

export default ThemeSwitcher