import React, { Component } from 'react';

export default class Header extends Component {
    render() {
      return (
        <header className="App-header">
        
        <p>{this.props.title}</p>
    </header>
      )
    }
  }

