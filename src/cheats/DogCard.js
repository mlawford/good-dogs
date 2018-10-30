import React, { Component } from 'react';

class DogCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogFoto: this.props.dogFoto,
      buttonText: 'WHOS A GOOD BOI'
    }
  }

  changeButtonText = () =>{
    this.setState({
      buttonText: 'IM THE NEW TEXT'
    })
  }

  render(){
    return(
      <div>
        <img className="dog-foto" src={this.state.dogFoto}/>
        <br/>
        <input type="submit" value={this.state.buttonText} onClick={this.props.isGoodBoi}/>
        <input type="submit" value="CHANGE WHAT MY BUTTON SAYS" onClick={this.changeButtonText}/>
      </div>
    )
  }
}

export default DogCard
