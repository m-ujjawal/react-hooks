import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SingleDataFetching() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonCick, setIdFromButtonClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonCick}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(error => console.log(error))
    }, [idFromButtonCick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type='text' value={id}
                onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>
                Fetch Post
            </button>
            <ul>
                <li >{post.title}</li>
            </ul>
        </div>
    )
}
export default SingleDataFetching