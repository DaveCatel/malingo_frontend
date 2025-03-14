import React, { useState } from 'react'
import './App.css'
import BasicRoute from './routes/Routes'

function App() {
  const [activityData, setActivityData] = useState(null);
  return (
    <div>
      <BasicRoute activityData={activityData} setActivityData={setActivityData }/>
    </div>

  )
}

export default App
