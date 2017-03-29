import React, { Component } from 'react';

import logo from './logo.svg'
import './App.css';
import Search from './components/Search'
import NewsList from './components/NewsList'
import Header from './components/Header'

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
        <Header />
        <Search handleTextChange={(event) => this.changeKeyword(event)}/>
        <NewsList handleKeyword={this.state.keyword} data={this.state.data} />
      </div>
    )
  }
}

export default App
