import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { showMoviesDetails } from 'services/moviesAPI';

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
        <div>
            <Link to={location?.state?.from ?? '/'}>
            <button type="button">Back</button>
            </Link>

            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={original_title}/>
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
                        <Link to="cast" state={{from:location?.state?.from ?? '/'}}>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{from:location?.state?.from ?? '/'}}>Reviews</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </div>
    )


}

export default MovieDetails;