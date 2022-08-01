import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { showMoviesCredits } from "services/moviesAPI"; 


const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        showMoviesCredits(movieId).then(movie => setCast(movie.cast))
    },[movieId]);

    

    return(
        <div>
            <ul>
                {cast && cast.map(({id,profile_path,original_name,name,character}) => (
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} width="100"/>
                        <h3>{name}</h3>
                        <p>Character:{character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default Cast;