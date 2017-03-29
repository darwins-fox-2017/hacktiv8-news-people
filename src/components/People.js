import React, {Component} from 'react'
import logo from '../logo.svg';
import '../App.css';
import PeopleList from './PeopleList'
import {Link} from 'react-router-dom'

class People extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    const self = this

    fetch('https://swapi.co/api/people').then((response) => {
      return response.json()
    }).then((data) => {
      self.setState({
        people: data.results
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <nav>
          <Link to="/">News</Link>
          &nbsp;
          <Link to="/people">People</Link>
        </nav>
        <PeopleList people={this.state.people} />
      </div>
    )
  }
}

export default People
