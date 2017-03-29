import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import NewsList from './components/NewsList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      people: [],
      keyword: ''
    }
  }

  componentDidMount() {
    const self = this

    fetch('https://hn.algolia.com/api/v1/search?query=redux').then((response) => {
      return response.json()
    }).then((data) => {
      self.setState({
        data: data.hits
      })
    })
  }

  changeKeyword(event) {
    this.setState({
      keyword: event.target.value
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
        <Search handleTextChange={(event) => this.changeKeyword(event)}/>
        <NewsList handleKeyword={this.state.key7word} data={this.state.data} />
      </div>
    );
  }
}

export default App;
