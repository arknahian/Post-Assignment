import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const PostDetail = (props) => {
    const {postID} = useParams();
    const [post , setPost] = useState({});
    useEffect(() =>{
        const fakeData = `https://jsonplaceholder.typicode.com/posts/${postID}`;
        fetch(fakeData)
        .then(res => res.json())
        .then( data => setPost(data))
    } ,[])
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fakeData = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`;
        fetch(fakeData)
        .then(res => res.json())
        .then (data => setComments(data))
    }, [])

    return (
       <div className="post">
           <h1>{post.title}</h1>
    <p>{post.body}</p>
            {
                comments.map(pst => <p>{pst.body}</p>)
            }
       </div>
    );
};

export default PostDetail;