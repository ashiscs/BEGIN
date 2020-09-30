import React from 'react'

function Hero({name}) {
    if(name==="sunanda"){
        throw new Error('You are not a hero asshole')
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default Hero
