import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <header className="banner-header">
          <img src={logo} className="banner-logo" alt="logo" />
          <h1 className="banner-title">Welcome to Conway's Game of Life</h1>
        </header>
      </div>
    );
  }
}

export default Banner;
