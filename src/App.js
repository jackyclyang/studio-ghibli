import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Collection from './Collection'
import Header from './Header'
import Footer from './Footer'
import About from './About'

class App extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <Header />
        <div className='main'>
          <Route path='/' exact={true}>
            <img src='https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg' alt="studio ghibli characters" className='hero' />
          </Route>
          <Route path='/collection/'>
            <Collection />
          </Route>
          <Route path='/about/'>
            <About />
          </Route>

        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
