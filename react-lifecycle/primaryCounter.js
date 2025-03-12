import React, { Component } from 'react'

export class PrimaryCounter extends Component {
    constructor(props) {
        console.log('Primary Counter constructor is called');
      super(props)
    
      this.state = {}
    }
    
    
     static getDerivedStateFromProps(props,state){
        console.log('primaryCounter getDerivedStateFromProps is called');
        return null;
    }  

    shouldComponentUpdate(nextProps,nextState){
        console.log('primary counter shouldComponentUpdate is called');
        if(this.props.pcounter !== nextProps.pcounter){
            return true;
        }
        return false;
       
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('primary Counter getSnapshotBeforeUpdate is called');
        return null;
    }

    componentDidMount(){
        console.log('primary component Did Mount is called');
    }


    componentDidUpdate(){
        console.log('primary counter componentDidUpdate is called ');
    }
  render() {
    console.log('primary counter render is called');
    return (
      <div>
         <h1>{this.props.pcounter}</h1>
      </div>
    )
  }
}

export default PrimaryCounter
