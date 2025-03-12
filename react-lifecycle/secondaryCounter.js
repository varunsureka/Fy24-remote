import React, { Component } from 'react'

export class SecondaryCounter extends Component {
    constructor(props) {
        console.log('Secondary Counter is constructor is called');
      super(props)
    
      this.state = {
         
      }
    }
    
     static getDerivedStateFromProps(props,state){
        console.log('Secondary Counter getDerivedStateFromProps is called');
         return null;
    }  

    shouldComponentUpdate(nextProps,nextState){
        console.log('Secondary Counter shouldComponentUpdate is called');
        if(this.props.scounter !== nextProps.scounter){
            return true;
        }
        return false;
      
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Secondary Counter getSnapshotBeforeUpdate is called');
        return null;
    }

    componentDidMount(){
        console.log('Secondary Counter component Did Mount is called');
    }
 

    componentDidUpdate(){
        console.log('Secondary Counter componentDidUpdate is called');
    }
  render() {
    console.log('Secondary Counter render is called');
    return (
      <div>
         <h1>{this.props.scounter}</h1> 
      </div>
    )
  }
}

export default SecondaryCounter
