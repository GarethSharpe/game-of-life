import React, { Component } from 'react';
import Cell from '../Cell/cell.js'
import './board.css';

class Board extends Component {
  renderCell(i) {
  	let isAlive = false;
    return (
      <Cell
        key={i}
        isAlive={isAlive}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
  	let rows = [];
  	let squares = [];

  	for (var row = 0; row < 40; row++) {
      for (var square = row * 75; square < row * 75 + 75; square++) {
        squares.push(this.renderCell(square));
      }
      rows.push(<div key={row} className="board-row">{squares}</div>)
      squares = [];
	}

    return (<div>{rows}</div>);
  }
}

export default Board;