import React from 'react'
import classes from './PostFilms.module.css'

const PostFilms = ({ img, title, year, runtime, genres, rating, url }) => {
    return (
        <li className={classes.film__item}>
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <p>{year}</p>
            <p>Длительность {runtime} минут</p>
            <p>{genres}</p>
            <p>{rating}</p>
            <a href={url}>Посмотреть</a>
        </li>
    )
}

export default PostFilms

