import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
