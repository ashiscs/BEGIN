import React,{useReducer, useEffect} from 'react'
import Axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS': 
        return {
            loading: false,
            post: action.payload,
            error: ''
        }
        case 'FETCH_ERROR': 
        return {
            loading: false,
            post: action.payload,
            error: 'Something went wrong'
        }
        default: 
        return state
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            dispatch({type: 'FETCH_SUCCESS',payload: res.data})
        }).catch(res=>{
            dispatch({type: 'FETCH_ERROR'})
        })
    })
    return (
        <div>
            {state.loading?'loading':state.post.title}
            {state.error?'something went wrong':null}
        </div>
    )
}

export default DataFetchingTwo
