import React from 'react'
import {Link} from 'react-router-dom'
const Menu = () => (
  <div className="navbar">
    <nav>
      <a><Link to="/">News</Link></a>
      <a><Link to="/people">Peoples</Link></a>
    </nav>
  </div>
)

export default Menu
