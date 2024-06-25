import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';

import MainLayout from '../layouts/mainLayout';

import HomePage from '../pages/homePage';
import JobsPage from '../pages/jobsPage';
import NotFoundPage from '../pages/notFound';
import JobPage, {jobLoader} from '../pages/jobPage';
import AddJob from '../pages/addJob';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader}/>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  
  )
);
const App = () => {
  return <RouterProvider router={router} />;  
};

export default App