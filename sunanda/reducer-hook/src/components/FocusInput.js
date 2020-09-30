import React, {useEffect, useRef} from 'react'

function FocusInput() {
    const inref = useRef(null)
    useEffect(()=>{inref.current.focus()})
    return (
        <div>
            <input ref={inref} type='text'/>
        </div>
    )
}

export default FocusInput
