import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import NotFound404 from '../pages/404';
import Games from '../pages/games';
import Home from '../pages/home';
import Learn from '../pages/learn';
import Quiz from '../pages/quiz';
import Read from '../pages/read';
import Watch from '../pages/watch';

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' >
          <Route index element={<Home/>} />
          <Route path='read'>
            <Route index element={<Read/>} />
          </Route>
          <Route path='learn' >
            <Route index element={<Learn/>} />
          </Route>
          <Route path='watch' >
            <Route index element={<Watch/>} />
          </Route>
          <Route path='quiz' element={<Quiz/>} />
          <Route path='games' element={<Games/>} />
          <Route path='*' element={<NotFound404/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;