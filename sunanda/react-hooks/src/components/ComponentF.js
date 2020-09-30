import React,{useContext} from 'react'
import {userContext, anotherContext} from '../App'


function ComponentF() {
const user = useContext(userContext)
const another = useContext(anotherContext)
    return (
        <div>
            {user} is {another}
        </div>
    )
}

export default ComponentF
