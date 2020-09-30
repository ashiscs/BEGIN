import React, {useState} from 'react'
import useDocTitle from '../hooks/useDocTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    useDocTitle(count)
    return (
        <div>
            <button onClick = {()=>{setCount(count + 1)}}>Button clicked {count} times</button>
        </div>
    )
}

export default DocTitleOne
