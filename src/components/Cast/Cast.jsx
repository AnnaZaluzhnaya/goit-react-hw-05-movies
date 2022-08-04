import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { showMoviesCredits } from "services/moviesAPI"; 
import PropTypes from 'prop-types';
import style from './Cast.module.css'


const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams();
    const defaultImage ='https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o=';

    useEffect(() => {
        showMoviesCredits(movieId).then(movie => setCast(movie.cast))
    },[movieId]);

    

    return cast && cast.length === 0 ? (
        <p className={style.detailsMessage}>Sorry, no information about cast.</p>
        ) : (
        <div>
            <ul className={style.castList}>
                {cast && cast.map(({id, profile_path, original_name,name,character}) => (
                    <li className={style.castItem} key={id}>
                        <img className={style.movieImg} src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : defaultImage} 
                        alt={original_name}/>
                        <h3 className={style.castName}>{name}</h3>
                        <p className={style.castCharacter}><span className={style.castCharacterS}>Character:</span><br/>{character}</p>
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