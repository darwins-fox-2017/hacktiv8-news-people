import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import News from './components/News'
import Peoples from './components/Peoples'

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path='/' component={News} />
            <Route path='/peoples' component={Peoples} />
          </div>
      </BrowserRouter>
    );
  }
}



export default App;
