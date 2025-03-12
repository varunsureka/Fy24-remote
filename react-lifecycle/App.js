import React, { Component } from 'react'
import Parent from './Parent';
import PrimaryCounter from './primaryCounter';
import SecondaryCounter from './secondaryCounter';
 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Varun',
       firstCounter:0,
       secondCounter:0
    }
  }

  onPrimaryCounter=() => {
    this.setState({firstCounter:this.state.firstCounter + 1})
  }

  onSecondaryCounter=() => {
     this.setState({secondCounter:this.state.secondCounter + 1});
  }
  
  render() {
    return (
      <div className='App'>
       {/*  <Parent name={this.state.name} /> */}
       <PrimaryCounter pcounter={this.state.firstCounter} />
       <button onClick={this.onPrimaryCounter}>Change Primary Counter</button>
       <SecondaryCounter   scounter={this.state.secondCounter} />
         <button onClick={this.onSecondaryCounter}>Change Secondary Counter</button>
      </div>
    )
  }
}

export default App

