import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Collection from './Collection'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import CTA from './CTA'

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
            <div className='hero'>
              <img src='https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg' alt="studio ghibli characters" className='hero-img' />
              <span className="hero-modal">
                <Link to="/collection/" exact="true">
                  <CTA text="View Collection" className="view-collection-button" />
                </Link>
              </span>
            </div>

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
