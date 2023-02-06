import React from 'react'
import PostFilms from '../PostFilms/PostFilms'

const PostList = ({ isMovies }) => {

    

    return (
        <div className='film__list'>
            {isMovies.map(movie => {
                return <PostFilms
                    img={movie.medium_cover_image}
                    title={movie.title}
                    year={movie.year}
                    runtime={movie.runtime}
                    genres={movie.genres}
                    rating={movie.rating}
                    url={movie.url}
                   
                />

            })}
        </div>
    )
}

export default PostList