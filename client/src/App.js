import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import RegisterPage from './pages/Register/RegisterPage';
import Dashboard from './pages/Dashboard/Dashboard';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/RegisterPage' element={<RegisterPage type='RegisterPage'/>}/>
          <Route path='/Dashboard' element={<Dashboard type='Dashboard'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;