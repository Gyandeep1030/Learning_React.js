import React from 'react'
import { NavLink , Outlet } from 'react-router-dom';

const About = () => {
  return (
    <>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nostrum inventore voluptatem cum deserunt totam impedit, cupiditate corrupti quis autem animi temporibus excepturi eveniet dolor distinctio! At libero aperiam inventore.</p>
     
        <nav id="mainNavBar">
          <NavLink to="HR">HR</NavLink>
          <NavLink to="Manager">Manager</NavLink>
          <NavLink to="Emp">Emp</NavLink>
        </nav>

        <Outlet/>

   </>
  )
}
export default About;