import React, { Component } from 'react';
import './App.scss';
import Persion from './components/Persion';
import AboutMe from './components/AboutMe';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Persion />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;
