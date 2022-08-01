import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const Navigation = lazy(() => import('components/Navigation'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast  = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const Loader = lazy(() => import('components/Loader'))

// import Home from '../pages/Home/Home';
// import Navigation from './Navigation';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails'
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';


export const App = () => {
  return (
    <div>
      <Navigation/>
      <Suspense fallback={<Loader />}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Movies />}/>
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
      <Route path="*" element={<Home />} />
      </Routes>
      </Suspense>
    </div>
  );
};

