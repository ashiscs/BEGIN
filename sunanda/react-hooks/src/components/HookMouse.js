import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouseposition = (s) =>{
        console.log('mouse event')
        setX(s.clientX)
        setY(s.clientY)
    }

    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mousemove', mouseposition)
        return() =>{
            console.log('component unmount')
            window.removeEventListener('mousemove', mouseposition)
        }

    },[])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
