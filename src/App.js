import React, { Component } from 'react'
import './App.css'
import Suggestions from './components/Suggestions'


class App extends Component {
  render() {
    return (
      <div className="box">
        <h2>Where are you going ?</h2>
        <p>Pick-up Location</p>
        <Suggestions />
      </div>
    );
  }
}

export default App;
