import React, { Component } from 'react';
import DogCard from './DogCard.js'

class DogContainer extends Component{
  constructor(){
    super()
    this.state =  {
      dogFoto: 'http://www.rentcafe.com/dmslivecafe/UploadedImages/e44a0982-d9d2-4e92-b90f-b279eaabfe53.jpg',
      goodBoi: ''
    }
  }

  isGoodBoi = () => {
    this.setState({
      goodBoiCount: 'DeFiNitely A Gud Boi'
    })
  }

  render(){
    return(
      <div>
        {this.state.goodBoiCount}
        <DogCard dogFoto={this.state.dogFoto} isGoodBoi={this.isGoodBoi}/>
      </div>
    )
  }
}

export default DogContainer
