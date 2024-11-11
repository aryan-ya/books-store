import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Route , Routes} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}


    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/course" element = {<Course />}></Route>
    </Routes>
    </>
  )
}

export default App