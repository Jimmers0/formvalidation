import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Form from './Form'
import ThankYou from './ThankYou'

function App() {
  return (
    <Router>

            <div>
            <Route path='/' exact component={Form} />
            <Route path='/thankyou' exact component={ThankYou} />
            </div>
        </Router>
  );
}

export default App;
