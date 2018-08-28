import React, {Component} from 'react';

class ListItem extends Component {
  render(){
    return(
      <div>
      <li> {this.props.num + 1 +'.'} {this.props.doThis}</li>
      </div>
    )
  }
}


export default ListItem
