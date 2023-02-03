import React from 'react'

const Select = ({ options, defaultValue, value, change }) => {
    return (
        <select 
        value={value}
        onChange={evt=> change(evt.target.value)}

        >
            <option disabled={true} value="value1">{defaultValue}</option>
            {
                options.map((option) =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )
            }
        </select>
    )
}

export default Select