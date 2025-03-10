import React, { Component } from 'react';
import Persons from './Components/Persons/Persons';
import Buttons from './Components/Buttons/Buttons';
import './App.css';
export class App extends Component {
  constructor(props){
     console.log('App.js constructor is called')
     super(props)
     this.state = {
      persons:[
        {id:1,name:'max',age:25},
        {id:2,name:'Manu',age:27},
        {id:3,name:'Sam',age:28}
      ],
      showPersons:false
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log('App.js getDerivedStateFromProps is called ');
     return null;
  }

  shouldComponentUpdate(nexProps,nextState){
    console.log('App.js Should Component Update is called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('App.js getSnapShotBeforeUpdate ');
    return null;
  }

  componentDidUpdate(){
   console.log('App.js componentDid Update is called');
  }
    
  
    nameChangeHandler = (event) => {
     // copy the state don't mutate the state directly 
      let data = [...this.state.persons];
      data[0].name = event.target.value;
      this.setState({persons:data});
    }
    toggleHandler = () => {
      this.setState({showPersons:!this.state.showPersons});
    }

    deleteHandler = (personIndex) => {
      const allPersons = [...this.state.persons];
      allPersons.splice(personIndex,1);
      this.setState({persons:allPersons});
    }
    inputChangeHandler = (event,id) => {
      const personIndex = this.state.persons.findIndex(
        (p) => {
          return p.id === id;
        }
      );

      const onePerson ={...this.state.persons[personIndex]};
      onePerson.name = event.target.value;
      const allPersons = [...this.state.persons];
      allPersons[personIndex]= onePerson;
      this.setState({persons:allPersons})
    }

    componentDidMount(){
      console.log('App.js componentDidMount is called');
    }
     
  render() {
     console.log('App.js render is called');
      let person = null;
    if(this.state.showPersons){
     person = (
      <div>
        <Persons 
        persons={this.state.persons}
        delete={this.deleteHandler} 
        change={this.inputChangeHandler}
        />
      </div>
     )
    } 

    
    return (
      <div className='App'>
      <header>
        <Buttons 
        toggleHandler={this.toggleHandler}
        showPersons={this.state.showPersons}
        
        />
           {person}
      </header>
    </div>
    ) 

    
  }
}

export default App
