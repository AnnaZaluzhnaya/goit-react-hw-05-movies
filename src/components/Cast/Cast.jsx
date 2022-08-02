import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { showMoviesCredits } from "services/moviesAPI"; 
import PropTypes from 'prop-types';
import style from './Cast.module.css'


const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        showMoviesCredits(movieId).then(movie => setCast(movie.cast))
    },[movieId]);

    

    return  cast && cast === 0 ? (
        <p>Sorry, the cast list is not available right now. </p>
        ) : (
        <div>
            <ul className={style.castList}>
                {cast && cast.map(({id,profile_path,original_name,name,character}) => (
                    <li className={style.castItem} key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} width="300"/>
                        <h3>{name}</h3>
                        <p>Character:<br/>{character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            profile_path: PropTypes.string.isRequired,
            original_name: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
        })
    )
}

export default Cast;