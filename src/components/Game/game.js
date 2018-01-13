import React, { Component } from 'react';
import Board from '../Board/board.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        cells: Array(40*75).fill(null)
      }],
      generation: 0,
      numCells: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.generation + 1);
    const current = history[history.length - 1];
    let cells = current.cells.slice();
    const numCells = this.state.numCells;

    cells[i] = true;

    this.setState({
      history : history[history.length - 1] = ([{
        cells: cells
      }]),
      numCells: numCells + 1,
    });
  }

  render() {
    const history = this.state.history.slice(0, this.state.generation + 1);
    const current = history[0];
    const cells = current.cells.slice();
    const numCells = this.state.numCells;

    return (
      <div>
        <Board
          cells={current.cells}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    );
  }
}

export default Game;