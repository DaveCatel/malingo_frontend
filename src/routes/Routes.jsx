import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import HomePage from '../pages/HomePage'
import CreatActivityPage from '../pages/CreatActivityPage'
import SignUp from '../components/SignUp'


const BasicRoute = ({activityData, setActivityData}) => {

  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='home' element={<HomePage activityData={activityData} />} />
        <Route path='createActivity' element={<CreatActivityPage setActivityData={setActivityData}/>} />

    </Routes>
  )
}

export default BasicRoute
