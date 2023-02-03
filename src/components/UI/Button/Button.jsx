import React from 'react'

const Button = ({ options, change }) => {
    return (
        <div>
            {
                options.map((option) =>
                    <button
                        value={option.value}
                        onClick={evt => change(evt.target.value)}
                        key={option.value} >
                        {option.name}
                    </button>
                )
            }
        </div>
    )
}

export default Button