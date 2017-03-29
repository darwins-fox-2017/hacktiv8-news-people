import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from './Form'

import { Link } from 'react-router-dom'


class News extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      keyword: ''
    }
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=redux', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      this.setState({data: data.hits})
    })
  }

  search(event) {
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

        <ul>
          <li><Link to='/'>news</Link></li>
          <li><Link to='/peoples'>peoples</Link></li>
        </ul>

        <h1>News</h1>

        <Form
          handleChange={this.search.bind(this)}
        />

        <ul>
          {this.state.data.filter((item, index)=> {
            let filterPattern = new RegExp(this.state.keyword,'gi')
            return filterPattern.test(item.title)
          })
            .map((item, index) => {
            return (
              <li key={index}><a href={item.url} target="_blank">{item.title}</a> </li>
            )
            })
          }
        </ul>
      </div>
    )
  }
}

export default News
