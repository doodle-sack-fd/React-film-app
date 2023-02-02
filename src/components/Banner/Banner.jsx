import React from 'react'
import classes from './Banner.module.css'


const Banner = () => {


    return (
        <div className={classes.banner}>
            <div className={classes.banner__container}>
                <img className={classes.banner__img} src="https://img.freepik.com/premium-vector/movie-cinema-premiere-poster-design-free-vector-it-s-movie-time-banner-template-pop-corn-and-reel_742418-78.jpg?w=996" alt="" />
            </div>
        </div>
    )
}

export default Banner