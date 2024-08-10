import React from 'react'
import { SideNavBar } from './Components/SideNavBar/SideNavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNav from './Components/TopNav/TopNav'
import Home from './Pages/Home/Home'
// import SideBar from './Test/SideBar'
import './App.css'
import ToolTip from './Components/Test/ToolTip'



function App() {
  return (
    <div className='app-Main'>
    <BrowserRouter>
       <Routes>
       <Route element={<SideNavBar/>}>
         <Route element={<TopNav />}>
           <Route path="/" element={<Home />} />
         </Route>
       </Route>
     </Routes>
    </BrowserRouter>
    {/* <ToolTip/> */}
    {/* <SideBar/> */}
  </div>
  )
}

export default App



{/* <div>
    <BrowserRouter>
    {loggedIn ? (
       <Routes>
       <Route element={<SideNavBar loginStatus={loginStatus}/>}>
         <Route element={<TopNav />}>
           <Route path="/" element={<Home />} />
         </Route>
       </Route>
     </Routes>
    ):(
      <Routes>
      <Route path="/" element={<Login loginStatus={loginStatus} />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    )}
     
    </BrowserRouter>
  </div> */}