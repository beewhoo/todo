import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js'

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



  render() {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
         <ListItem doThis={item} key={index}/>
    ))



    return (
      <div className="App">
      <h1> Things I should stop procastinating: </h1>

      <ul>
        {todoItems}
      </ul>

      <form>
      <input type='text' placeholder='type an item here'onChange={(e) => this.newItemChange(e)} value={this.state.newItem}/>
      <button onClick={(e) => this.addItem(e)}>Add it!</button>
      </form>

      </div>
    );
  }
}

export default MyList;
