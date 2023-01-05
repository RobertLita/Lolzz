import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import History from './pages/History';
import RootPage from './pages/RootPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/history',
        element: <History />
      }
    ]
  },
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
