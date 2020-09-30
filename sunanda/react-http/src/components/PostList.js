import React, { Component } from 'react'
import axios from 'axios'


export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts5').then(response => {
            this.setState({posts: response.data})
        }).catch(err => {
            this.setState({error : 'Something wrong happen here, so fuck off bitch'})
        })
    }
    
    render() {
        return (
            <div>
                {this.state.posts.length? this.state.posts.map(post => <div key={post.id}>{post.title} from {post.userId}</div>): null}
        {this.state.error? <div>{this.state.error}</div>: null}
            </div>
        )
    }
}

export default PostList
