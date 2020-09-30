import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const inc  = ()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const interval = setInterval(inc, 2000)
        return()=>{
            clearInterval(interval)
        }
    },[count])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
