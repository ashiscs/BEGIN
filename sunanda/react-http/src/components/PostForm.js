import Axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''
        }
    }
    changehandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submithandler = e =>{
        e.preventDefault()
        console.log(this.state)
        Axios.get('https://jsonplaceholder.typicode.com/posts',this.state).then(response => console.log(response)).catch(response => console.log(response))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submithandler}>
                    <div>
                        <input type='text' name='userId' value={this.state.userId} onChange={this.changehandler} />
                    </div>
                    <div>
                        <input type='text' name='title' value={this.state.title} onChange={this.changehandler} />
                    </div>
                    <div>
                        <input type='text' name='body' value={this.state.body} onChange={this.changehandler} />
                    </div>
                    <button type='submit'>Submit here</button>
                </form>
            </div>
        )
    }
}

export default PostForm
