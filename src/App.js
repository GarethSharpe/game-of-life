import React, { Component } from 'react';
import './App.css';

import Game from './components/Game/game.js'
import Banner from './components/Banner/banner.js'
import Controller from './components/Controller/controller.js'
import Footer from './components/Footer/footer.js'

class App extends Component {
  render() {
    return (
    	<div>
	      <Banner></Banner>
	      <div className='main'>
		      <Game></Game>
		      <div className='controller-panel'>
		      	<Controller></Controller>
		      </div>
		  </div>
		  <Footer></Footer>
      </div>
    );
  }
}

export default App;
