import React from 'react';
import './cell.css';

function Cell(props) {
  const className = props.isAlive ? "cell-alive" : "cell-dead";
  return (
    <button className={className} onClick={props.onClick}>
    </button>
  );
}

export default Cell;