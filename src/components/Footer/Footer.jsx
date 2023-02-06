import React from 'react'
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <ul>
                    <li>Нетфликс</li>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer