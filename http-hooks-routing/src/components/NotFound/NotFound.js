import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
   const  onclickHandler = () => {
        navigate('/');
     
    }
  return (
    <div>
      <h1>The Page you are looking for is not found!</h1>
      <button onClick={onclickHandler}>take me to Home</button>
    </div>
  )
}

export default NotFound
