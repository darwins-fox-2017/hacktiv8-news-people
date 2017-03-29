import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from './App';
import People from './components/People'
import './index.css'

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/news" component={App} />
        <Route path="/people" component={People} />
      </div>
    </Router>,

  document.getElementById('root')
)
