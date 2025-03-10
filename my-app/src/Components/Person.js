import styles from './Person.module.css';
const Person = (props) => {
    const {name,age} = props;
    //props.name = 'anothername';
    
    
  return (
    <div  className={styles.Person}>
         <p onClick={props.delete}> I am {name} and i am {age} years old</p>
         <input type="text" value={name} onChange={props.change} />
           
    </div>
  )

}

export default Person;