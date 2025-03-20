import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
import { SignUp } from './pages/signup';
import { Pricing } from './pages/pricing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'pricing', element: <Pricing /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;