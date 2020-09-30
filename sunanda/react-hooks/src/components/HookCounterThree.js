import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstname: '', lastname: ''})
    return (
        <div>
            <input type='text' onChange= {(c)=>setName({...name, firstname: c.target.value})} />
            <input type='text' onChange= {(c)=>setName({...name, lastname: c.target.value})} />
    <h2>My first name is {name.firstname}</h2>
    <h2>My last name is {name.lastname}</h2>
    <h1>{JSON.stringify(name)}</h1>
        </div>
    )
}

export default HookCounterThree
