import React from 'react'
import Home from './home/Home'
import Courses from './courses/courses'
import {Route , Routes} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}

   <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/course" element = {<Courses />}></Route>
    </Routes>
    </div>
    </>

  )
}

export default App