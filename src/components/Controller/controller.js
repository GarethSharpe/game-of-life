import React, { Component } from 'react';
import './controller.css';

class Controller extends Component {
	renderCellCounter() {
		return (
			<div className="cell-counter">
			Cell counter works!
      </div>
     )
	}

  render() {
  	let cellCounter = this.renderCellCounter();
    return (
      <div className="container">
      	<div className="controller">
      	{cellCounter}
      	</div>
      </div>
    );
  }
}

export default Controller;