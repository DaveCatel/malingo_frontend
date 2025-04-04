import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import HomePageLayout from '../layouts/HomePageLayout'
import PostActvity from '../pages/postActivity/PostActvity'
import UserProfile from '../pages/userProfile/UserProfile'
import ActivityDetails from '../pages/activityDetails/ActivityDetails'
import Notification from '../pages/notification/Notification'
import JoinRequestsPage from '../pages/joinrequest/JoinRequestsPage'


const BasicRoute = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePageLayout />}/>        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/postactivity' element={<PostActvity/>} />
        <Route path='/profile' element={<UserProfile/>} />
        <Route path='/details/:id' element={<ActivityDetails/>}/>
        <Route path='/request/:activityId' element={<JoinRequestsPage />} />
    </Routes>
  )
}

export default BasicRoute
