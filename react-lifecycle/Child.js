import React, { Component } from 'react'

 class Child extends Component {
    constructor(props) {
        console.log('Child constructor is called');
      super(props)
    
      this.state = {
         
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log('child getDerivedStateFromProps is called ');
        return null;
    }

    componentDidMount(){
        console.log('child componentDidMount is called ');
    }
    
  render() {
    console.log('child render is called');
    return (
      <div>
         <h1>Child Component</h1>
      </div>
    )
  }
}

export default Child
