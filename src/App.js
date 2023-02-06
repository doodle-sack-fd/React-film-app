import Header from './components/Header/Header.jsx';
// import News from './components/News/News.jsx';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import PostList from './components/PostLIst/PostList.jsx';
import SecondHeader from './components/SecondHeader/SecondHeader.jsx';

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
    }

    return (
        <div className='App'>
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedSort={selectedSort}
                sortPosts={sortPosts}
            />
            <SecondHeader
                selectedSort={selectedSort}
                sortPosts={sortPosts}
            />
            {isLoading
                ? <h1 style={{textAlign:'center'}}>Идет загрузка..</h1>
                : <PostList
                    isMovies={sortedAndSearchedPosts}
                />
            }
            <Footer />
        </div>
    )
}

export default App;
