import { Suspense } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { RouteConfig, publicRoutes } from './routes/public/routes';
import { privateRoutes } from './routes/private/routes';

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          {publicRoutes.map((route: RouteConfig) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                isAuthenticated ? route.element : <Navigate to={'/signUp'} />
              }
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
