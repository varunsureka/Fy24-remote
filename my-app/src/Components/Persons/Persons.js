import React from "react";
import Person from "./Person/Person";
class Persons extends React.Component{
     constructor(props){
        console.log('Persons.js constructor is called');
        super(props);
        this.state = {

        }
     }

     static getDerivedStateFromProps(props,state){
        console.log('Persons.js getDerivedStateFromProps is called ');
         return null;
      }

      shouldComponentUpdate(nextProps,nextState){
        console.log('Persons.js Should Component Update is called');
        return true;
      }

      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Persons.js getSnapShotBeforeUpdate ');
        return null;
      }

      componentDidUpdate(){
        console.log('Persons.js componentDid Update is called');
       }


      componentDidMount(){
        console.log('Persons.js componentDidMount  is called')
      }
      render(){
        console.log('Persons.js render is called ');
        return(
           this.props.persons.map(
                (p,index) => {
                    return (
                        <Person 
                        key={p.id} 
                        name={p.name} 
                        age={p.age} 
                        delete={() => this.props.delete(index)}
                        change={(event) => this.props.change(event,p.id)}
                        />
                    )
                }
            )
        )
      }
}

export default Persons;
/* const Persons = (props) => {
  return (
    props.persons.map(
        (p,index) => {
            return (
                <Person 
                key={p.id} 
                name={p.name} 
                age={p.age} 
                delete={() => props.delete(index)}
                change={(event) => props.change(event,p.id)}
                />
            )
        }
    )
  )
}


export default Persons; */