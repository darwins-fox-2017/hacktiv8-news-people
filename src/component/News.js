import React, { Component } from 'react';
import Form from './Form'
import List from './List'
import logo from '../logo.svg';
import Header from './Header'
import Menu from './Menu'

class News extends Component {
  constructor(){
    super()
    this.state = {
      data:[],
      search:""
    }
  }
  componentDidMount(){
    fetch(`http://hn.algolia.com/api/v1/search?query=redux`)
    .then(res => res.json())
    .then(data => this.setState ({data: data.hits}))
  }
  changeHandler(keyword){
    this.setState({
      search: keyword
    })
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.search}`)
    .then(res => res.json())
    .then(data => this.setState ({data: data.hits}))
  }
  render() {
    return (
      <div className="News">
        <Header />
        <Menu />
        {this.state.data.length === 0 && <img src={logo} className="App-logo" alt="logo" />}
        <List data={this.state.data} search={this.state.search} />
        <Form changeHandler={(keyword)=>this.changeHandler(keyword)} />
      </div>
    )
  }
}

export default News;
