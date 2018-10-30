import React, { Component } from 'react';

class DogCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      dog_foto: this.props.dogFoto
    }
  }

  render(){
    return(
      <div>
        WOOF
        <img src={this.state.dog_foto}/>
        <input type="submit" value="WHOS A GOOD BOI" onClick={this.props.isGoodBoi}/>
      </div>
    )
  }
}

export default DogCard
