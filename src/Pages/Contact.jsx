import React from 'react'
import { NavLink , Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nostrum inventore voluptatem cum deserunt totam impedit, cupiditate corrupti quis autem animi temporibus excepturi eveniet dolor distinctio! At libero aperiam inventore.</p>
    
    <nav id="mainNavBar">
          <NavLink to="contactHR">HR</NavLink>
          <NavLink to="contactManager">Manager</NavLink>
          <NavLink to="contactEmp">Emp</NavLink>
        </nav>

        <Outlet/>
   </>
  )
}
export default Contact;
