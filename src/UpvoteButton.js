import React, { Component } from 'react';

export default class UpvoteButton extends Component {

  render(){
    return(
      <div>
        <button onClick={this.props.incrementor}>GOOD BOI COUNTER</button>
      </div>
    )
  }
}
