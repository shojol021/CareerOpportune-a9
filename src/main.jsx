import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import Blogs from './components/Blogs';
import Statistics from './components/Statistics';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path: '/', element: <Home></Home>},
      {path: '/statistics', element: <Statistics></Statistics>},
      {path: 'jobs', element: <AppliedJobs></AppliedJobs>},
      {path: 'blogs', element: <Blogs></Blogs>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
