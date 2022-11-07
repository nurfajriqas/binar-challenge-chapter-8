import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/Register/RegisterPage'
import Dashboard from '../pages/Dashboard/Dashboard'

export default function Router() {
    return (
        <Routes>
            <Route path='/RegisterPage' index element={<RegisterPage />} />
            <Route path='/Dashboard' index element={<Dashboard />} />
        </Routes>
    )
}