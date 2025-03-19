import { useEffect, useState } from 'react'

import { UserSidebar } from './components/layouts/UserSidebar'
// import './App.css'
import './assets/adminlte.css'
import './assets/adminlte.min.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { Login } from './components/common/Login'
import { SignUp } from './components/common/SignUp'
import { BuyertalkSidebar } from './components/layouts/BuyertalkSidebar'
import { Demo } from './components/buyer/Demo'
import axios from 'axios'

import { SupportTeamSidebar } from './components/layouts/SupportTeamSidebar'
import { SupportTeamLogin } from './components/supportteam/SupportTeamLogin'
import { SupportTeamSignUp } from './components/supportteam/SupportTeamSignUp'


import { Products } from './components/products/Products'
import PrivateRoutes from './hooks/PrivateRoutes'
import { Products2 } from './components/products/Products2'
import { ViewMyProducts } from './components/products/ViewMyProducts'
import { UpdateMyProduct } from './components/products/UpdateMyProduct'
import { BusinessLogin } from './components/common/BusinessLogin'
import { BusinessSignUp } from './components/common/BusinessSignUp'

function App() {

  axios.defaults.baseURL = "http://localhost:3000"
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

 

  return (
   
  
     <div className={location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/businessSignup" || location.pathname === "/businessLogin" ? ""  :"app-wrapper"}>
     <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/businessSignup" element={<BusinessSignUp></BusinessSignUp>}></Route>
      <Route path="/businessLogin" element={<BusinessLogin></BusinessLogin>}></Route>

      <Route path="" element={<PrivateRoutes></PrivateRoutes>}>
      <Route path="/business" element={<BuyertalkSidebar/>}>
        
      
      </Route>
      <Route path="/supportteam" element={<SupportTeamSidebar></SupportTeamSidebar>}>
        <Route path="login" element={<SupportTeamLogin></SupportTeamLogin>}></Route>
        <Route path="signup" element={<SupportTeamSignUp></SupportTeamSignUp>}></Route>
      
      </Route>

      
      <Route path="/user" element={<UserSidebar />}>
        <Route path="profile" element={<UserProfile></UserProfile>}></Route>
      </Route>

      <Route path="/product" element={<BuyertalkSidebar />}>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="products2" element={<Products2></Products2>}></Route>
        <Route path="viewmyproducts" element={<ViewMyProducts></ViewMyProducts>}></Route>
        <Route path="updateproduct/:id" element={<UpdateMyProduct></UpdateMyProduct>}></Route>


      </Route>
      <Route path='/buyer' element={<BuyertalkSidebar></BuyertalkSidebar>}>
      <Route path='demo' element={<Demo></Demo>}></Route>
      </Route>
      </Route>
     </Routes>


    </div>
    
  
   
  )
}

export default App
