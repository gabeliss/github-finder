import React from 'react'

function Header() {
  return (
    <header>
        <div className='pos'>
          <h1 style={{marginRight: "25px"}} >Github Finder</h1>
          <i style={{fontSize: "50px"}} className="fa fa-brands fa-github"></i>
        </div>
        <div className='pos'>
          <button className='header-button'>Home</button>
          <button className='header-button'>About</button>
        </div>
    </header>
  )
}

export default Header