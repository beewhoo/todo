import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import ToDoList from './ToDoList';

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem:''
    }
  }

  newItemChange (e) {
   this.setState({
     newItem: e.target.value
   })
 }

 addItem (e) {
  // prevent the button from triggering the form's default submit event.
  e.preventDefault()
  var toDos = this.state.toDoItemArray
  toDos.push(this.state.newItem)
  this.setState({toDoItemArray: toDos, newItem: ''})
}

clearList(e){
  this.setState = {
    toDoItemArray:[]
  }

}



  render() {
  



    return (
      <div className="App">
      <h1> Things I should stop procastinating: </h1>

      <ul>
        <ToDoList toDoItemArray={this.state.toDoItemArray} />
      </ul>

      <form>
      <input type='text' placeholder='new to do'onChange={(e) => this.newItemChange(e)} value={this.state.newItem}/>
      <button onClick={(e) => this.addItem(e)}>Add!</button>
      <button onClick={(e) => this.clearList(e)}>Clear!</button>
      </form>

      </div>
    );
  }
}

export default MyList;
