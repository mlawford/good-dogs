import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DogContainer from './DogContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={`https://appstickers-cdn.appadvice.com/1193488894/820484437/1f09db3c0309b0dbd4e69a8b80b33b7b-4.png`} className="App-logo" alt="logo" />
          <DogContainer />
        </header>
      </div>
    );
  }
}

export default App;
