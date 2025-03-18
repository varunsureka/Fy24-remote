import React from 'react';
import Posts from '../../components/Posts/Posts';
import { Routes,Route,Link,NavLink } from 'react-router-dom';
import NewPost from '../../components/NewPost/NewPost';
import NotFound from '../../components/NotFound/NotFound';
import FullPost from '../../components/FullPost/FullPost';

import './Blog.css';

const Blog = () => {

    return (
        <div className='Blog'>
          <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to={{
                        pathname:'new-post',
                    
                    }}>New Post</NavLink></li>
                </ul>
            </nav>
        </header>
          <Routes>
             <Route path='/' element={<Posts />} />
             <Route path='/new-post' element={<NewPost />} />
             <Route path='/:postId' element={<FullPost />} />
             <Route path='*' element={<NotFound />} />
          </Routes>
         
        
        </div>
    );
    
   
}

export default Blog;

