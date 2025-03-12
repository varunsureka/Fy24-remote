import React, { Component } from 'react'
import Child from './Child';
 class Parent extends Component {
    constructor(props) {
        console.log('Parent Constructor is called');
      super(props)
    
      this.state = {
         name:'Sam'
      }
    }
     static getDerivedStateFromProps(props,state){
        console.log('Parent getDerivedStateFromProps');
          if(props.name !== state.name){
             return {
                 name:props.name
             }
          }
          return null;
    } 

    componentDidMount(){
        console.log('Parent Component Did Mount is called');
    }
    
  render() {
    console.log('Parent render is called');
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <Child />
      </div>
    )
  }
}

export default Parent
