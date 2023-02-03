import Header from './components/Header/Header.jsx'
// import News from './components/News/News.jsx';
import PostFilms from './components/PostFilms/PostFilms.jsx';
import axios from 'axios'
import './App.css';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer.jsx';
import PostList from './components/PostLIst/PostList.jsx';
import Select from './components/UI/Select/Select.jsx';
import Button from './components/UI/Button/Button.jsx';
import MyInput from './components/UI/Input/MyInput.jsx';

function App() {

    const [isLoading, setIsLoading] = useState(true)
    const [isMovies, setMovies] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedAndSearchedPosts = useMemo(() => {
        return [...isMovies].filter(film => film.title.toLowerCase().includes(searchQuery))
    }, [isMovies, searchQuery])




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

    }, [])

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        if (sort === 'title') {
            setMovies([...isMovies].sort((a, b) => a[sort].localeCompare(b[sort])))
        } else {
            setMovies([...isMovies].sort((a, b) => a[sort] - b[sort]))
        }
        
        console.log(sortedAndSearchedPosts)

       
    }


    return (
        <div className='App'>
            <div>
            </div>
            <div>
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
            <MyInput
                placeholder='Введите название фильма'
                value={searchQuery}
                type="text"
                onChange={evt => setSearchQuery(evt.target.value)}
            />
            <div>{searchQuery}</div>

            <Header />
            {isLoading
                ? <h1>Идет загрузка..</h1>
                : <PostList isMovies={sortedAndSearchedPosts} />
            }
            <Footer />
        </div>
    )
}

export default App;
