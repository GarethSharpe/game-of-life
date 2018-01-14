import React, { Component } from 'react';
import Cell from '../Cell/cell.js'
import './board.css';

class Board extends Component {
  renderCell(i) {
  	const isAlive = this.props.cells[i] ? true : false;
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

  	for (var row = 0; row < 50; row++) {
      for (var square = row * 70; square < row * 70 + 70; square++) {
        squares.push(this.renderCell(square));
      }
      rows.push(<div key={row} className="board-row">{squares}</div>)
      squares = [];
	}

    return (<div className='align'>{rows}</div>);
  }
}

export default Board;