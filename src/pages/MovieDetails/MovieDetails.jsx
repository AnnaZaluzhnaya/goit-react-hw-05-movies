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
                <h1 className={style.originalTitle}>{original_title} ({release_date?.slice(0, 4)})</h1>
                <p className={style.userScore}>User Score: {Math.round(vote_average*10)}%</p>
                <h2 className={style.detailsTitle}>Overview</h2>
                <p className={style.detailsText}>{overview}</p>
                <h2 className={style.detailsTitle}>Genres</h2>
                <p className={style.detailsText}>{genres?.map(genre => genre.name).join('/')}</p>
            </div>

            <div className={style.detailsDescription}>
                <h2 className={style.detailsTitle}>Additional information</h2>
                <ul className={style.detailsList}>
                
                    <li className={style.detailsItem}>
                    <Link className={style.detailsLink} to="cast" state={{from: location.state ? location.state.from : '/'}}>Cast</Link>
                    </li>
                    <li className={style.detailsItem}>
                    <Link className={style.detailsLink} to="reviews" state={{from: location.state ? location.state.from : '/'}}>Reviews</Link>
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