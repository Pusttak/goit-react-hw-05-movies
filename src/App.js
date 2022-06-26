import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'components/Loader';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

const HomeView = lazy(() => import('./views/HomeView'));
const MoviesView = lazy(() => import('./views/MoviesView'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView'));
const Reviews = lazy(() => import('views/Reviews'));
const Cast = lazy(() => import('views/Cast'));

export const App = () => (
  <>
    <AppBar />
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsView />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Container>
  </>
);
