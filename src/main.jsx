import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import PageOne from './Components/PageOne/PageOne'
import Statistics from './Components/Statistics/Statistics'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import Blog from './Components/Blog/Blog'
import JobDetails from './Components/JobDetails/JobDetails'
import Notfound from './Components/Notfound/Notfound'
import jobsLoader from './loader/jobsloader'
import Onsite from './Components/Onsite/Onsite'
import onsiteloader from './loader/onsiteloader'
import Remote from './Components/Remote/Remote'
import remoteloader from './loader/remoteloader'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <PageOne></PageOne>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsLoader
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'job-details/:id',
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          try {
            const response = await fetch('/jobs.json');
            const data = await response.json();
            return data[params.id - 1];
          } catch (error) {
            console.log(error);
          }
        }
      },
      {
        path: 'onsite',
        element: <Onsite></Onsite>,
        loader: onsiteloader
      },
      {
        path: 'remote',
        element: <Remote></Remote>,
        loader:  remoteloader
      },
      {
        path: '*',
        element: <Notfound></Notfound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
