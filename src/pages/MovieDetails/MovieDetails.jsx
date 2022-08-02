import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { showMoviesDetails } from 'services/moviesAPI';
import {BiArrowBack} from "react-icons/bi";
import PropTypes from 'prop-types';
import style from './MovieDetails.module.css'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    const {movieId} = useParams();
    
    const {
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
    } = movieDetails;
    
    useEffect(() => {
        showMoviesDetails(movieId).then(details => setMovieDetails(details));
    },[movieId]);

    return(
        <div >
            <Link className={style.backLink} to={location?.state?.from ?? '/'}>
            <button className={style.backBtn} type="button">  <span className={style.iconBtn}>
                <BiArrowBack/>
            </span>  
            GO BACK
            </button>
            </Link>
            <div className={style.movieDescription} >
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}/>
                <h1>{original_title} ({release_date?.slice(0, 4)})</h1>
                <p>User Score: {Math.round(vote_average*10)}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{genres?.map(genre => genre.name).join('/')}</p>
            </div>

            <div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast" state={{from: location.state ? location.state.from : '/'}}>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{from: location.state ? location.state.from : '/'}}>Reviews</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </div>

    )
}


MovieDetails.propTypes = {
    movieDetails: PropTypes.arrayOf(
        PropTypes.shape({
    original_title:PropTypes.string.isRequired,
    genres:PropTypes.string.isRequired,
    overview:PropTypes.string.isRequired,
    poster_path:PropTypes.string,
    release_date:PropTypes.number.isRequired,
    vote_average:PropTypes.number.isRequired,
    }),
    ),
};

export default MovieDetails;