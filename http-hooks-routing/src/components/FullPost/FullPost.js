import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './FullPost.css';

const FullPost = (props) => {
    const {postId} = useParams();
    const [loadedPost,setloadedPost] = useState(null);
    const URL = `http://localhost:8000/posts/${postId}`;
     useEffect(
        () => {
            if(postId){
             axios.get(URL)
             .then(response => setloadedPost(response.data))
             .catch(err => console.log(err))
            }

            return () =>{
                //any clean up code
                //component WillUnMount
                setloadedPost(null);
            }
        },[]
     );

     const deleteHandler = () => {
        axios.delete(URL)
        .then(response => console.log(response))
        .catch(err => console.log(err));
     }
   
    let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
    if(postId){
        <p style={{textAlign:'center'}}>Post is Loading!!</p>;
    }

    if(loadedPost){
        post = (
            <div className="FullPost">
                <h1>{loadedPost.title}</h1>
                <p>{loadedPost.body}</p>
                <div className="Edit">
                    <button onClick={deleteHandler}  className="Delete">Delete</button>
                </div>
            </div>
    
        );
       
    }
    return post;
}
      
    
  
   


export default FullPost;