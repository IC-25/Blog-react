import React from 'react'
import  {Link} from "react-router-dom"
import "./Home.css"
import { FaBars } from "react-icons/fa";
import {useState} from "react";
const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav class="container NavBar">
      <Link to='/' style={{color: 'inherit', textDecoration: 'inherit'}} > <h1>MY BLOG</h1> </Link>
      <ul className={ navOpen? "nav-open":"sidemenu"} >
        <li>
          {" "}
          <Link to="/register">Signup</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
      </ul>
      <FaBars id='bagger' onClick={() =>{
        setNavOpen(!navOpen);
      }}/>
    </nav>
  );
}

export default Home
