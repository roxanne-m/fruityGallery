import React, { Component } from 'react';
import './App.css';
import { Intro } from './components/Introduction/Intro';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Fruit Gallery</h1>
        </header>
        <main className='App'>
          <div>
            <Intro />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
