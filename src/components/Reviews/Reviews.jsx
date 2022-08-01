import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { showMoviesReviews } from "services/moviesAPI";

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        showMoviesReviews(movieId).then(setReviews);
    }, [movieId]);
    
    return reviews && reviews.total_results === 0 ? (
        <p>Sorry,there are no reviews for this movie, your review will be the first </p>
        ) : (
        <ul>
            {reviews &&
            reviews.results.map(({id,author,content}) => (
                <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
                </li>
            ))}
        </ul>
    );
};


export default Reviews;