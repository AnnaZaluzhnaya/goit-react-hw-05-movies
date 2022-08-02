import {Link, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './PopularMoviesList.module.css';



const PopularMoviesList = ({movies}) => {
 const location = useLocation();

 return movies.map(movie => {
    return (
        <li className={style.popularList} key={movie.id}>
            <Link className={style.popularListLink}to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
            </Link>
        </li>
    );
 });

};

PopularMoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ),
};

export default PopularMoviesList;