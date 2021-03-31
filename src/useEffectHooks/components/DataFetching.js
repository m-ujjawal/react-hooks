import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]);
    
    //If we don't pass empty array as a dependency then it will fetch data at infinite time 
    //because we have not mentioned when to rerender. 
    //It should fetch data as only once (componentDidMount)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(error => console.log(error))
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching