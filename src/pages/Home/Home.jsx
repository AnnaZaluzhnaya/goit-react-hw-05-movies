import {useState, useEffect} from 'react';
import {showPopularMovies} from 'services/moviesAPI';
import PopularMoviesList from 'components/PopularMoviesList/PopularMoviesList';

export const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
    showPopularMovies().then(response => setPopularMovies(response.results));
},[]);

return (
    <div>
        <h1>Trending today</h1>
        <ul>
            {popularMovies && <PopularMoviesList movies={popularMovies}/>}
        </ul>
    </div>
)

};

export default Home;