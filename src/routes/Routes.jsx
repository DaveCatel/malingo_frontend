import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'


const BasicRoute = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />}/>        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
    </Routes>
  )
}

export default BasicRoute
