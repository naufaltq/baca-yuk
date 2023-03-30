import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;