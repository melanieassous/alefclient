import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentLetter: "A"
    }
  }

  generateRandomLetter() {
    setTimeout(() => {
      this.setState(currentLetter, Math.random().toString(36))
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="random-letter">this.state.currentLetter</div>
      </div>
    );
  }
}

export default App;
