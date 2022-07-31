import {Link, useLocation} from 'react-router-dom';



const PopularMoviesList = ({movies}) => {
 const location = useLocation();

 return movies.map(movie => {
    return (
        <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
            </Link>
        </li>
    );
 });

};
 export default PopularMoviesList;