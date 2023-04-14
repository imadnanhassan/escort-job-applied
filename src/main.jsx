import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NoteFound from './Pages/NotFound/NoteFound'
import AppliedJob from './Pages/AppliedJob/AppliedJob'
import Statistics from './Pages/Statistics/Statistics'
import Blogs from './Pages/Blogs/Blogs'
import FeaturedJobs from './components/FeaturedJobs'
import JobDetails from './components/JobDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/job.json")
      },
      {
        path: "/applied-job",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>
      },

      {
        path: "/jobdetails/:jobID",
        element: <JobDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/job.json");
          const jobs = await res.json();

          const findJob = jobs.find(job => job.id === params.jobID);
          return findJob;
        }
      },
      {
        path: "*",
        element: <NoteFound></NoteFound>
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
