import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>      
      <header className="header">
        <h1 className="header-title">Search Application</h1>
        {/* Icons section */}
        <div className="header-icons">
          <span className="header-name">Akash Sumaria</span>
          {/* LinkedIn profile link */}
          <a href="https://www.linkedin.com/in/akashsumaria/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          {/* GitHub profile link */}
          <a href="https://github.com/SumariaAk" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header