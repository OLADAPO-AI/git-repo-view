import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

function LandingPage() {
  return (
    <>
      <NavBar />
      <section className="container mx-auto flex flex-row justify-center align-middle h-screen mt-14">
        <Outlet />
      </section>
    </>
  )
}

export default LandingPage
