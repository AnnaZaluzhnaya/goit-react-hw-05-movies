import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { showMoviesReviews } from "services/moviesAPI";
import PropTypes from 'prop-types';
import style from './Reviews.module.css'

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        showMoviesReviews(movieId).then(setReviews);
    }, [movieId]);
    
    return reviews && reviews.total_results === 0 ? (
        <p>Sorry,there are no reviews for this movie, your review will be the first </p>
        ) : (
        <ul className={style.reviewsList}>
            {reviews &&
            reviews.results.map(({id,author,content}) => (
                <li className={style.reviewsItem} key={id}>
                <h4 className={style.reviewsName}>{author}</h4>
                <p className={style.reviewsText}>{content}</p>
                </li>
            ))}
        </ul>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content:PropTypes.string.isRequired,
        }),
    ),
};


export default Reviews;