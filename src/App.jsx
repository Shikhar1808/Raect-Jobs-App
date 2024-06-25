import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from '../layouts/mainLayout';

import HomePage from '../pages/homePage';
import JobsPage from '../pages/jobsPage';
import NotFoundPage from '../pages/notFound';
import JobPage, { jobLoader } from '../pages/jobPage';
import AddJobPage from '../pages/addJob';
import EditJobPage from '../pages/editjob';


const App = () => {

  const addJob = async (job) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobsSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path="/edit-jobs/:id" element={<EditJobPage updateJobsSubmit={updateJob}/>} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    )
  );

  return <RouterProvider router={router} />;
};

export default App