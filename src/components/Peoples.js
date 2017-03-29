import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Link } from 'react-router-dom'

class Peoples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <ul>
          <li><Link to='/'>news</Link></li>
          <li><Link to='/peoples'>peoples</Link></li>
        </ul>

        <h1>Peoples</h1>

          <ul>
              {this.state.data.map((item, index) => {
                return (
                  <li key={index}>{item.name} </li>
                )
              })
              }
          </ul>


      </div>
    )
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      // console.log(data.results[0].name);
      this.setState({data: data.results})
    })
  }
}

export default Peoples
