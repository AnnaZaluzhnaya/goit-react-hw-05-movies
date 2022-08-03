import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import {showSearchMovies} from 'services/moviesAPI';
import PropTypes from 'prop-types';
import style from './Movies.module.css';



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
        <div >
            <div className={style.searchbar}>
        <form className={style.searchForm} onSubmit={handleSubmit} >
            <input
            className={style.SearchInput}
            name="query"
            type="text"
            placeholder="Search movies"
            autoFocus
            />
            <button className={style.searchButton} type="submit" >
            <span >
                <BiSearchAlt/>
            </span>
            </button>
        </form>
        </div>
        
        <ul>
        {enteredValue && enteredValue.results.map(movie => (
            <li className={style.searchList}key={movie.id}>
                <Link className={style.searchMoviesLink}to={`/movies/${movie.id}`}
                state={{ from: location }}>{movie.title}
                </Link>
            </li>
        ))}
        </ul>
        </div>
    );
};

Movies.propTypes = {
    movie: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ),
};


export default Movies;