import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */)
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "MoviesView" */)
);
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView' /* webpackChunkName: "MovieDetailsView" */)
);

export const App = () => (
  <>
    <AppBar />
    <Container>
      <Suspense
        fallback={
          <p
            style={{
              textAlign: 'center',
              marginTop: '25px',
              fontWeight: '700',
            }}
          >
            Loading...
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Container>
  </>
);
