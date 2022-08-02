import {useState, useEffect} from 'react';
import {showPopularMovies} from 'services/moviesAPI';
import { lazy, Suspense } from 'react';
import style from './Home.module.css';
const PopularMoviesList   = lazy(() => import('components/PopularMoviesList/PopularMoviesList'));

export const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
    showPopularMovies().then(response => setPopularMovies(response.results));
},[]);

return (
    <div className={style.wrapper}>
        <h1 className={style.homeTitle}>Trending today</h1>
        <Suspense>
        <ul>
            {popularMovies && <PopularMoviesList movies={popularMovies}/>}
        </ul>
        </Suspense>
    </div>
)

};

export default Home;