import React from 'react'
import {NavLink} from 'react-router-dom'
import './header.css';

function Header() {
    return (
        <nav className='Header'>
                <NavLink   className="Tab active Logo" to="/">
                    <img className="icon_logo" src={"images/logo_icon.png"} alt="Haary potter api icon" />
                    <p>HP API</p>
                </NavLink>
              <NavLink  exact activeClassName="active" className="Tab" to="/">
                  {/* <img src={"home icon.png"} alt="harry potter api home icon" /> */}
                  Home</NavLink>
             
              <NavLink activeClassName="active" className="Tab" to="/About">
                  {/* <img src={'about.png'} /> */}
                  About</NavLink>
          
        </nav>
    )
}

export default Header
