import React, { useEffect } from 'react';
// import Page from './pages/singlepost/Page';
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom';
import Shared from './components/Shared';
import Container from './pages/Container';
import SinglePost from './pages/SinglePost';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import { useState } from 'react';
const App = () => {
  const [blogs, setBlogs] = useState([]);

  //fetch blogs
  const fetchBlogs = async () =>{
    const res = await fetch("https://blogapi-wm30.onrender.com/api/v1/blog");
    const data = await res.json();
    return data.blogs;
  }
 

  useEffect(() =>{
    const getBlogs = async () =>{
      const blogsFromSever = await fetchBlogs();
      setBlogs(blogsFromSever);
    }
    getBlogs();
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Shared />}>
          <Route index element={<Container blogs={blogs}/>} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="*" element={<h1>Error page</h1>} />

          <Route path="/:blogId" element={<SinglePost blogs={blogs} />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard blogs={blogs} />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </>
    )
  );
  return (
       <RouterProvider router={router} />
  )
}

export default App
