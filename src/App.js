import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/' exact='true'><img src='http://www.ghibli.jp/img/totoro.png' alt="logo" /></Link>
        <Link to='/collection'>Collection</Link>
        <Link to='about'>About</Link>

      </header>
      <div className='main'>

      </div>

    </div>
  );
}

export default App;
