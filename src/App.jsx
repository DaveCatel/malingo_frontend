import React, { useState } from 'react'
import './App.css'
import BasicRoute from './routes/Routes'
import HomeNavBar from './components/sections/homeNavBar/HomeNavBar'

function App() {
  const [activityData, setActivityData] = useState([])

  return (
    <div>
      <BasicRoute activityData={activityData} setActivityData={setActivityData }/> 
    </div>

  )
}

export default App
