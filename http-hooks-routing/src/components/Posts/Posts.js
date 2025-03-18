import React,{useState,useEffect} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Posts() {
    const [posts,setPosts] = useState([]);
    /* const [postId,setPostId] = useState(null); */
    const navigate = useNavigate();
    const URL = `http://localhost:8000/posts`;
    useEffect(
        () => {
        axios.get(URL)
        .then(response => setPosts(response.data.slice(0,3)))
        .catch(err => console.log(err));
        },[]
    );
    const onpostClickHandler = (id) => {
        //setPostId(id);
        navigate(`/${id}`)
      }
      let post = posts.map(p => {
        return(
          /*   <Link key={p.id} to={{
                pathname:`/${p.id}`
            }}>
              <Post 
            click={() => onpostClickHandler(p.id)}
            
            title={p.title} /></Link> */

           
              <Post key={p.id} 
            click={() => onpostClickHandler(p.id)}
            
            title={p.title} />
          
        )
    })  
  return (
    <section className="Posts">
    {post}
 </section>
  )
}

export default Posts
