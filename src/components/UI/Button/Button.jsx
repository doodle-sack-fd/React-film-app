import React from 'react'
import classes from './Button.module.css'

const Button = ({ options, change }) => {
    return (
        <div>
            {
                options.map((option) =>
                    <button
                        className={classes.sortBtn}
                        value={option.value}
                        onClick={evt => change(evt.target.value)}
                        key={option.value} >
                        {option.name + ' /'}
                    </button>
                )
            }
        </div>
    )
}

export default Button