import React, { Component } from 'react';
import './App.css';

import Game from './components/Game/game.js'
import Banner from './components/Banner/banner.js'
import Footer from './components/Footer/footer.js'

class App extends Component {
  render() {
    return (
    	<div className="main">
	      <Banner></Banner>
		  <Game></Game>
		  <Footer></Footer>
      </div>
    );
  }
}

export default App;
