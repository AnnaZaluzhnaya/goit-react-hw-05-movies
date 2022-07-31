import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { MdImageSearch } from 'react-icons/md';
import {showSearchMovies} from 'services/moviesAPI';
// import PopularMoviesList from 'components/PopularMoviesList';
// import style from './Movies.module.css';
// import PropTypes from 'prop-types';

const Movies = () => {
    const [enteredValue, setEnteredValue] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const getQuery = searchParams.get('query');
    const location = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        const valueInput = event.currentTarget;
        const value = event.target.elements.query.value.toLowerCase();
        
        setSearchParams({query: value});
        valueInput.reset();

        if(value.trim() === ''){
            Notiflix.Notify.failure("Please,check the correct spelling of the movie title and try again");
            return;
        }
    };

    useEffect(() => {
        if (getQuery === ''){
            return;
        }
        getQuery && showSearchMovies(getQuery).then(movie => setEnteredValue(movie));
    },[getQuery]);

    
    return (
        <div>
        <form onSubmit={handleSubmit} >
            <input
            name="query"
            type="text"
            placeholder="Search movies"
            autoFocus
            />
            <button type="submit" >
            <span >
                <MdImageSearch />
            </span>
            </button>
        </form>
        
        <ul>
        {enteredValue && enteredValue.results.map(movie => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}
                state={{ from: location }}>{movie.title}
                </Link>
            </li>
        ))}
        </ul>
        </div>
    );
};



export default Movies;