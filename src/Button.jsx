import React from 'react'

const Button = ({getRandomAll, colorRandom}) => {
    return (
        <button
            onClick={getRandomAll}
            style={{ backgroundColor: colorRandom }}
        >&gt;
        </button>
    )
}

export default Button