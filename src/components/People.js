import React, {Component} from 'react'

import Header from './Header'
import PeopleList from './PeopleList'
import '../App.css'

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
        <Header />
        <PeopleList people={this.state.people} />
      </div>
    )
  }
}

export default People
