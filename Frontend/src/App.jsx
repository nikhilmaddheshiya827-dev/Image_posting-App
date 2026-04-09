import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/createPost.jsx'
import Feed from './pages/Feed.jsx'
import Auth from './pages/Auth.jsx'
import Login from './pages/Login.jsx'
import Stairs from './Components/Stairs.jsx'

const App = () =>{
  return(
    <Router>
      <Stairs />
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/' element={<Auth />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </Router>
    )
}
export default App;