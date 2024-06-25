import { Outlet } from 'react-router-dom'

import Navbar from '../src/components/navbar'

const mainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default mainLayout