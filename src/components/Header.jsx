import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <div className='pos'>
          <i style={{fontSize: "50px"}} className="fa fa-brands fa-github"></i>
          <h1 style={{marginLeft: "25px"}} >Github Finder</h1>
        </div>
        <div className='pos'>
          <Link to="/">
            <button className='header-button'>Home</button>
          </Link>
          <Link to="about">
            <button className='header-button'>About</button>
          </Link>
        </div>
    </header>
  )
}

export default Header