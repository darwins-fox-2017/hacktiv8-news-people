import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import '../App.css'

const Header = () => (
  (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <nav>
        <Link to="/">News</Link>
        &nbsp;
        <Link to="/people">People</Link>
      </nav>
    </div>
  )
)

export default Header
