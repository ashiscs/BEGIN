import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'sunanda',
        }
        console.log('LifecycleB constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null; 
    }
    componentDidMount(){
        console.log('LifecycleB componentdidmount')
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <h2>Hyy buddy from lifecucleA</h2>
            </div>
        )
    }
}

export default LifecycleB
