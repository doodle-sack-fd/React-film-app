import React from 'react'
import Button from '../UI/Button/Button'
import classes from './SecondHeader.module.css'

const SecondHeader = ({ selectedSort, sortPosts }) => {
    return (
        <div className={classes.secondHeader}>
            <div className={classes.secondHeader__container}>
                <Button
                    value={selectedSort}
                    change={sortPosts}
                    options={[
                        { id: 1, value: 'title', name: 'По названию' },
                        { id: 2, value: 'year', name: 'По дате выхода' },
                        { id: 3, value: 'rating', name: 'По рейтингу' }
                    ]}
                />
            </div>
        </div>
    )
}

export default SecondHeader