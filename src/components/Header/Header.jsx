import React from 'react'
import MyInput from '../UI/Input/MyInput'
import classes from './Header.module.css'

const Header = ({ searchQuery, setSearchQuery }) => {

    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__left}>
                    <div className={classes.header__text}>
                        <img src='https://www.freepnglogos.com/uploads/marvel-logo-png/image-marvel-studios-logo-disney-wiki-18.png' alt="" />
                    </div>

                </div>
                <div className={classes.header__right}>
                    <div className={classes.header__input}>
                        <MyInput
                            placeholder='Я ищу... '
                            value={searchQuery}
                            type="text"
                            onChange={evt => setSearchQuery(evt.target.value)}
                        />
                    </div>
                    <button className={classes.btn}>Выйти</button>
                </div>
            </div>
        </div>
    )
}

export default Header