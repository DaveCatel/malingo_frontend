import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import HomePageLayout from '../layouts/HomePageLayout'
import PostActvity from '../pages/postActivity/PostActvity'
import UserProfile from '../pages/userProfile/UserProfile'


const BasicRoute = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePageLayout />}/>        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/postactivity' element={<PostActvity/>} />
        <Route path='/Profile' element={<UserProfile/>} />
    </Routes>
  )
}

export default BasicRoute
