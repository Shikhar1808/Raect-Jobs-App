import React from 'react'

import Hero from '../src/components/hero'
import HomeCards from '../src/components/homeCards'
import JobListings from '../src/components/jobListings'
import ViewAllJobs from '../src/components/viewAllJobs'
const homePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListings isHome={true}/>
    <ViewAllJobs />
    </>
  )
}

export default homePage