import React from 'react'
import { NavLink , Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
        <header>Welcome to My Website</header>
        <nav id="mainNavBar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>

        <section>
            <Outlet />
        </section>
        <footer>i Am Footer</footer>
    </>
  )
}

export default Dashboard