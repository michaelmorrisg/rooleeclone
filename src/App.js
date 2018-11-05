import React, { Component } from 'react';
import './reset.css'
import './App.css';
import TopMessage from './TopMessage/TopMessage'
import MainNav from './MainNav/MainNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMessage />
        <MainNav />
      </div>
    );
  }
}

export default App;
