import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js'

class MyList extends Component {
  render() {
    return (
      <div className="App">
      <h1> Things I should stop procastinating: </h1>

      <ul>
      <ListItem/>
      </ul>

      </div>
    );
  }
}

export default MyList;
