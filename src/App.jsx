import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import AuthForm from './Components/Auth/AuthForm'
import ProtectedRoute from '../Routes/ProtectedRoutes'

const App = () => {
const [sidebar,setSidebar] = useState(true);

  return (
    <div>
    
      <Routes>
      <Route path="/*" element = {
        <ProtectedRoute>
        <Navbar setSidebar={setSidebar}/> 
        <Routes>       
        <Route path='/dashboard' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
  
        </Routes>
        </ProtectedRoute>
     }/>
        <Route path='/' element={<AuthForm />} /> 

        
      </Routes>
        {/* <Route path='/' element={<ProtectedRoute component={Home} />} /> 
        <Route path='/video/:categoryId/:videoId' element={<ProtectedRoute component={Video} />} />  */}
        {/* <Route path='/' element={<AuthForm />} />  */}
        {/* <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route  path='/video/:categoryId/:videoId' element={<Video/>}/>
        </Route> */}
    </div>
  )
}

export default App
