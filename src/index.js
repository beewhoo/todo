import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';


const toDos = []

ReactDOM.render(<MyList theList={toDos}/>, document.getElementById('root'));
