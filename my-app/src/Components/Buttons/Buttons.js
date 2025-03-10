import React,{PureComponent} from 'react'
class Buttons extends PureComponent {
    constructor(props){
        console.log('Button.js constructor is called')
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props,state){
        console.log('Button.js getDerivedStateFromProps is called ');
         return null;
      }

         /* shouldComponentUpdate(nextProps,nextState){
        console.log('Buttons.js Should Component Update is called');
        if((nextProps.toggleHandler !== this.props.toggleHandler) ||(nextProps.showPersons !== this.props.showPersons)){
            return true;
        }
        return false;
      }   */

      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Buttons.js getSnapShotBeforeUpdate ');
        return null;
      }

      componentDidUpdate(){
        console.log('Buttons.js componentDid Update is called');
       } 


      componentDidMount(){
        console.log('Button.js componentDidMount is called');
      }

      render(){
        console.log('Button.js render is called ');
        let style = {
            color:'red',
            padding:'10px',
            margin:'10px',
            fontWeight:'bold'
         }

         return (
            <div>
            <h1>This is React App!</h1>
            <button 
            onClick={this.props.toggleHandler} 
            style={style}>Display Persons</button>
       </div>
         )

      }
}
/* const Buttons = (props) =>  {
    let style = {
        color:'red',
        padding:'10px',
        margin:'10px',
        fontWeight:'bold'
     }
     if(props.showPersons){
        style.color='green';
     }
  return (
    <div>
         <h1>This is React App!</h1>
         <button 
         onClick={props.toggleHandler} 
         style={style}>Display Persons</button>
    </div>
  )
} */

export default Buttons
