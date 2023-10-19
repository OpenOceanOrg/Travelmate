import React from 'react'
import "./index.css"
import Home from './routes/Home';
import Service from './routes/Service';
import People from './routes/People';
import Hit from './routes/Hit';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element={ <Home/> } />
      <Route path ="/service" element={ <Service/> } />
      <Route path ="/people" element={ <People/> } />
      <Route path ="/hit" element={ <Hit/> } />
    </Routes>
    </>
  )
}

export default App