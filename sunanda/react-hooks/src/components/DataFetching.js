import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    useEffect(()=>{
        Axios.get('http://stocker.com').then(res=>{
            console.log(res)
            setPost(res.data)
        }).catch(err=>console.log(err))
        
    })
    return (
        <div>
            <ul><li key={post.id}>{post.title}</li></ul>
        </div>
    )
}

export default DataFetching
