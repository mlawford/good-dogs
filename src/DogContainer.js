import React, { Component } from 'react';
import UpvoteButton from './UpvoteButton'

export default class DogContainer extends Component {
  constructor(){
    super()
    this.state = {
      goodBoiCount: 0
    }
  }

  handleClick = () => {
    this.setState({
      goodBoiCount: ++this.state.goodBoiCount
    }, () => console.log(this.state.goodBoiCount))
  }


  render(){
    return(
      <div>
        <p>{this.state.goodBoiCount}</p>
        <UpvoteButton incrementor={this.handleClick}/>
      </div>
    )
  }
}
