import React, { Component } from 'react';
import Header from './Header'
import Menu from './Menu'
import logo from '../logo.svg';

class People extends Component {
  constructor(){
    super()
    this.state = {
      datas:[]
    }
  }
  componentDidMount(){
    fetch(`https://swapi.co/api/people/`)
    .then(res => res.json())
    .then(data => {
      this.setState ({datas: data.results})

    })
  }
  render() {
    return (
      <div className="People">
        <Header />
        <Menu />
        {this.state.datas.length === 0 && <img src={logo} className="App-logo" alt="logo" />}
        <ul>
        {
          this.state.datas.map((item,index)=>{
          return (
            <li key={index}><a>{item.name}</a></li>
              )
            }
          )
        }
        </ul>
      </div>
    );
  }
}

export default People;
