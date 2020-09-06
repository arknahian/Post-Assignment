import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Cart from './Components/Cart/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notmatch from './Components/NotMatch/Notmatch';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  const [post , setPost] = useState([]);
  useEffect(() =>{
      const fakeData = `https://jsonplaceholder.typicode.com/posts/`;
      fetch(fakeData)
      .then(res => res.json())
      .then( data => setPost(data))
  } ,[])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              post.map(pst => <Cart post={pst}></Cart>)
            }
          </Route>
          <Route path="/post/:postID">
              <PostDetail></PostDetail>
          </Route>
          <Route path="*">
            <Notmatch></Notmatch>
          </Route>
        </Switch>
      </Router>
      {/* <h1>Total {post.length}</h1> */}

    </div>
  );
}

export default App;
