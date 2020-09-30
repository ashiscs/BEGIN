import React, { Component } from 'react'
import { UserConsumer } from './userComtext'

export class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {username =>{
                        return <div>Helo {username}</div>
                    }}
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentF
