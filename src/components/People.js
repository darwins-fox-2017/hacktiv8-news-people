import React, {Component} from 'react'
import logo from '../logo.svg';
import '../App.css';
import PeopleList from './PeopleList'
import {Link} from 'react-router-dom'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peoples:[]
    }
  }

  componentDidMount(){
    const self = this
    fetch('https://swapi.co/api/people/')
      .then((response, err) => {
        if (err) throw err
        return response.json()
      })
      .then(data => {
        self.setState({
          peoples: data.results
        })
      })
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hacktiv8 News
        </p>

        <nav>
          <Link to="/News">News</Link>&nbsp;&nbsp;
          <Link to="/People">Peoples</Link>
        </nav>

        <PeopleList peoples={this.state.peoples} />
      </div>
    )
  }
}

export default People
