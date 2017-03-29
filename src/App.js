import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import News from './component/News'
import People from './component/People'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route exact path="/" component={News} />
        <Route path="/people" component={People} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
