import Header from './components/Header/Header.jsx'
import Banner from './components/Banner/Banner.jsx';
// import News from './components/News/News.jsx';
import PostFilms from './components/PostFilms/PostFilms.jsx';
import axios from 'axios'
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer.jsx';

function App() {

    const [isLoading, setIsLoading] = useState(true)
    const [isMovies, setMovies] = useState([])

    const getMovies = async () => {
        const { data:
            { data:
                { movies }
            }
        } = await axios.get('https://yts.mx/api/v2/list_movies.json')

        setMovies(movies)
        setIsLoading(false)

    }

    useEffect(() => {
        getMovies()
        console.log(isMovies)
    }, [])


    const renderMovies = () => {
        isMovies.map((movie) => {
            return (
                <div>{movie}</div>
            )
        })
    }








    return (
        <div>
            {isLoading
                ? <h1>Идет загрузка..</h1>
                : <div>
                    <Header />
                    <Banner />
                    {/* <News /> */}
                    <div className='film__container'>
                        <ul className='film__list'>
                            {isMovies.map(movie => {
                                console.log(movie);
                                return <PostFilms
                                    img={movie.medium_cover_image}
                                    title={movie.title}
                                    year={movie.year}
                                    runtime={movie.runtime}
                                    genres={movie.genres}
                                    url={movie.url} />

                            })}
                        </ul>
                    </div>
                </div>
                
            }
            <Footer />
        </div>
    )
}

export default App;
