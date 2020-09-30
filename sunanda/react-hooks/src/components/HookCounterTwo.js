import React, {useState} from 'react'

function HookCounterTwo() {
    const inicount =0
    const [count, setCount] = useState(inicount)
    return (
        <div>
            Count: {count}
            <button onClick = {()=>setCount(inicount)}>Reset Button</button>
            <button onClick = {()=>setCount(count+1)}>Increment Button</button>
            <button onClick = {()=>setCount(count-1)}>Decrement Button</button>
        </div>
    )
}

export default HookCounterTwo
