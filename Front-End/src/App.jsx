import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from './pages/Components/Dashboard/Dashboard';
import Support from './pages/Components/Support/Support';
import Help from './pages/Components/Help/Help';
import Plugins from './pages/Components/Plugins/Plugins';
import Error from './components/Error/Error';

function App() {

  const router = createBrowserRouter([
    {
      path:"*",
      element:<Error />
    },
    {
      path:"/",
      element: <HomePage />,
      children: [
        {index: true, element: <Navigate to="dashboard" /> }, //Default route to dashboard
        {path:"dashboard", element: <Dashboard />},
        {path:"support", element: <Support />},
        {path:"plugins", element: <Plugins />},
        {path:"help", element: <Help />},
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
