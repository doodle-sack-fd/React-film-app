import React, { useState } from 'react'
import classes from './Header.module.css'

const Header = () => {
    
    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__left}>
                    <div className={classes.header__text}>
                        <img src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png" alt="Логотип" width='100' />
                    </div>
                </div>
                <div className={classes.header__right}>
                    
                    <div className={classes.header__input}>
                        
                    </div>
                    <button>Выйти</button>
                </div>
            </div>
        </div>
    )
}

export default Header