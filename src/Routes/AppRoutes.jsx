import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Layout from '../Components/Layout'
import Events from '../Pages/Events'
import Contact from '../Pages/Contact'
import Donate from '../Pages/Donate'
import Navbar from '../Components/navbar'
//import ProtectedRoutes from './ProtectedRoutes'

import login from '../Components/login'; 
import Login from '../Pages/loginpage'
import AdminLogin from '../Admin/adminLogin'
import Dashboard from '../Admin/Pages/dashboard'



const AppRoutes = () => {
  return (
    <div> 
      <Navbar/>
        <Routes>
            <Route path='/' element= {<Layout/>} />
            <Route index element = {<Home/>} />
            <Route path= '/about' element= {<About/>}/>
            <Route path='/events' element= {<Events/>} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path = '/donate' element = {<Donate/>} />
            {/* <Route path='/admin' element = { <ProtectedRoutes> 
              <AdminDashboard/>
            </ProtectedRoutes> } /> */}
            <Route path = '/login' element = {<Login/>} />
            <Route path = '/adminLogin' element = {<AdminLogin/>} />
            <Route path='/dashboard' element = {<Dashboard/>} />

        </Routes>
    </div>
    
  )
}

export default AppRoutes