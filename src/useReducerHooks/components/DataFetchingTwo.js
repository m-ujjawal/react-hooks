import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.key) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went Wrong',
                post: {}
            }
        default:
            return state
    }
}
function DataFetchingTwo() {
    const [state, dispach] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response.data);
                dispach({
                    key: 'FETCH_SUCCESS',
                    payload: response.data
                })
            })
            .catch(error => {
                dispach({
                    key: 'FETCH_ERROR'
                })
            })
    },[])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo