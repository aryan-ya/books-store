import React from 'react'
import Home from './home/Home'
import Courses from './courses/courses'
import {Route , Routes} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}


    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/course" element = {<Courses />}></Route>
    </Routes>
    </>
  )
}

export default App