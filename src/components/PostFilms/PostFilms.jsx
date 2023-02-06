import React, { useState } from 'react'
import classes from './PostFilms.module.css'

const PostFilms = ({ img, title, year, runtime, genres, rating, url }) => {
    const [liked, setLike] = useState()


    const addToFavorite = title => {
        setLike(true);
    }

    return (
        <li className={classes.film__item}>
            <img src={img} alt={title} />
            <h1 className={classes.film__title}>{title}</h1>
            <p className={classes.film__year}>
                Год выпуска: {year}
            </p>
            <p>Длительность: {runtime ? runtime : '"не известно"'} минут</p>
            <p>Жанр: {genres}</p>
            <p>Рейтинг: {rating}</p>
            <a href={url}>К просмотру</a>
            <button className={classes.film__btnFavorite}
                onClick={() => addToFavorite(title)} ></button>
        </li>
    )
}

export default PostFilms

