import { useEffect, useState } from "react";

import { UserSidebar } from "./components/layouts/UserSidebar";
// import './App.css'
import "./assets/adminlte.css";
import "./assets/adminlte.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { UserProfile } from "./components/user/UserProfile";
import { Login } from "./components/common/Login";
import { SignUp } from "./components/common/SignUp";
import { BuyertalkSidebar } from "./components/layouts/BuyertalkSidebar";
import { Demo } from "./components/buyer/Demo";
import axios from "axios";

import { SupportTeamSidebar } from "./components/layouts/SupportTeamSidebar";
import { SupportTeamLogin } from "./components/supportteam/SupportTeamLogin";
import { SupportTeamSignUp } from "./components/supportteam/SupportTeamSignUp";

import { Products } from "./components/products/Products";
import PrivateRoutes from "./hooks/PrivateRoutes";
import { Products2 } from "./components/products/Products2";
import { ViewMyProducts } from "./components/products/ViewMyProducts";
import { UpdateMyProduct } from "./components/products/UpdateMyProduct";
import { BusinessLogin } from "./components/common/BusinessLogin";
import { BusinessSignUp } from "./components/common/BusinessSignUp";
import LandingPage from "./components/common/LandingPage";

import { ResetPassword } from "./components/common/ResetPassword";

import { AddComplaints } from "./components/user/AddComplaints";
import { ViewAllComplaints } from "./components/user/ViewAllComplaints";
import { ForgotPassword } from "./components/common/ForgotPassword";
import { AddReviewAndRatings } from "./components/review_and_ratings/AddReviewAndRatings";

import { BusinessResetPassword } from "./components/common/BusinessResetPassword";
import { BusinessForgotPassword } from "./components/common/BusinessForgotPassword";
import { ViewAllReviewAndRatings } from "./components/review_and_ratings/ViewAllReviewAndRatings";
import { ViewMyComplaints } from "./components/user/ViewMyComplaints";
import { ViewMyReviewAndRatings } from "./components/review_and_ratings/ViewMyReviewAndRatings";
import { ContactUs } from "./components/common/ContactUs";
import { ProductDetails } from "./components/review_and_ratings/ProductDetails";
import BusinessPrivateRoutes from "./hooks/BusinessPrivateRoutes";
import UserPrivateRoutes from "./hooks/UserPrivateRoutes";

import BusinessReviews from "./components/business/BusinessReviews";
import { ProductDetails2 } from "./components/business/ProductDetails2";
import { SelectLoginRole } from "./components/common/SelectLoginRole";
import { SelectRole } from "./components/common/SelectRole";
import { AdminDashboard } from "./components/common/AdminDashboard";
import { AdminSidebar } from "./components/layouts/AdminSidebar";
import { LandingPageDemo } from "./components/common/LandingPageDemo";
import { BusinessDetails } from "./components/common/BusinessDetails";
import { BusinessProductDetails } from "./components/common/BusinessProductDetails";
import { AdminProductDetails } from "./components/common/AdminProductDetails";
import AdminUserManagement from "./components/common/AdminUserManagement";
import { BusinessProfile } from "./components/business/BusinessProfile";
import { AdminLogin } from "./components/admin/AdminLogin";
import AdminPrivateRoutes from "./hooks/AdminPrivateRoutes";
import { AdminForgotPassword } from "./components/common/AdminForgotPassword";
import { AdminResetPassword } from "./components/common/AdminResetPassword";
import ErrorBoundary from "./components/ErrorBoundary";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;


const shouldApplyAppWrapper = (pathname)=>{
  const noWrapperPaths =[
    '/login',
    '/signup',
    '/businessSignup',
    '/businessLogin',
    '/reviewrating',
    '/resetPassword',
    '/forgotPassword',
    '/businessResetPassword',
    '/businessForgotPassword',
    '/productdetails',
    '/contactus',
    '/adminLogin',
    '/signUpRole',
    '/loginRole',
    '/adminResetPassword',
    '/adminForgotPassword',
    
  ];
  if(pathname === "/") return false;
  return !noWrapperPaths.some(path=> pathname.startsWith(path));
}


// import {LandingPage} from './components/common/LandingPage'

function App() {
  // axios.defaults.baseURL = "http://localhost:3000";
  // axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  axios.defaults.withCredentials = true; // if using cookies/auth

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div className={shouldApplyAppWrapper(location.pathname) ? "app-wrapper":"/user"}
     
    >
      <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/businessSignup"
          element={<BusinessSignUp></BusinessSignUp>}
        ></Route>
        <Route
          path="/businessLogin"
          element={<BusinessLogin></BusinessLogin>}
        ></Route>
         <Route path="/loginRole" element={<SelectLoginRole></SelectLoginRole>}></Route>
         <Route path="/signUpRole" element={<SelectRole></SelectRole>}></Route>

        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path ="/resetPassword/:token" element={<ResetPassword/>}></Route>
        <Route path ="/forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path ="/businessForgotPassword" element={<BusinessForgotPassword></BusinessForgotPassword>}></Route>
        <Route path ="/businessResetPassword/:token" element={<BusinessResetPassword></BusinessResetPassword>}></Route>
        <Route path="/landingpagedemo" element={<LandingPageDemo></LandingPageDemo>}></Route>
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path ="/adminForgotPassword" element={<AdminForgotPassword></AdminForgotPassword>}></Route>
        <Route path ="/adminResetPassword/:token" element={<AdminResetPassword></AdminResetPassword>}></Route>

        
       
       
        
        
        



        <Route path="" element={<BusinessPrivateRoutes></BusinessPrivateRoutes>}>
          <Route path="/business" element={<BuyertalkSidebar />}>
          <Route path="products" element={<Products></Products>}></Route>
            <Route path="products2" element={<Products2></Products2>}></Route>
            <Route
              path="viewmyproducts"
              element={<ViewMyProducts></ViewMyProducts>}
            ></Route>
            <Route
              path="updateproduct/:id"
              element={<UpdateMyProduct></UpdateMyProduct>}
            ></Route>
            <Route
              path="ratings"
              element={<BusinessReviews></BusinessReviews>}
            ></Route>
            <Route
              path="productdetails2/:productId"
              element={<ProductDetails2></ProductDetails2>}
            ></Route>
            <Route
              path="businessprofile"
              element={<BusinessProfile></BusinessProfile>}
            ></Route>
          
          
          
          
          </Route>
          </Route>


          <Route
            path="/supportteam"
            element={<SupportTeamSidebar></SupportTeamSidebar>}
          >
            <Route
              path="login"
              element={<SupportTeamLogin></SupportTeamLogin>}
            ></Route>
            <Route
              path="signup"
              element={<SupportTeamSignUp></SupportTeamSignUp>}
            ></Route>
          </Route>



          <Route path="" element={<UserPrivateRoutes></UserPrivateRoutes>}>

          <Route path="/user" element={<UserSidebar />}>
           
            <Route
            path="addreviewandrating"
            element={<AddReviewAndRatings></AddReviewAndRatings>}
          ></Route>
          <Route
            path="viewallreviewandratings"
            element={<ViewAllReviewAndRatings></ViewAllReviewAndRatings>}
          ></Route>
           <Route
            path="viewmyreviewandratings"
            element={<ViewMyReviewAndRatings></ViewMyReviewAndRatings>}
          ></Route>
          
          <Route path="addcomplaint" element={<AddComplaints></AddComplaints>}></Route>
          <Route path="viewallcomplaints" element={<ViewAllComplaints></ViewAllComplaints>}></Route>
          <Route
              path="viewmycomplaints"
              element={<ViewMyComplaints></ViewMyComplaints>}
            ></Route>
            <Route
            path="productdetails/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="userprofile" element={<UserProfile></UserProfile>}></Route>
           


            
            
          </Route>
          </Route>

          <Route path="/product" element={<BuyertalkSidebar />}>
            <Route path="products" element={<Products></Products>}></Route>
            <Route path="products2" element={<Products2></Products2>}></Route>
            <Route
              path="viewmyproducts"
              element={<ViewMyProducts></ViewMyProducts>}
            ></Route>
            <Route
              path="updateproduct/:id"
              element={<UpdateMyProduct></UpdateMyProduct>}
            ></Route>
          </Route>

          <Route path="" element={<AdminPrivateRoutes></AdminPrivateRoutes>}>
          <Route path="/admin" element={<AdminSidebar></AdminSidebar>}>
          <Route path="adminDashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="businessDetails" element={<BusinessDetails></BusinessDetails>}></Route>
          <Route path="businessProductDetails/:businessId" element={<BusinessProductDetails></BusinessProductDetails>}></Route>
          <Route path="adminProductDetails/:productId" element={<AdminProductDetails></AdminProductDetails>}></Route>
          <Route path="getUsers" element={<AdminUserManagement></AdminUserManagement>}></Route>
          


          
          </Route>
          </Route>

          



          

          <Route path="/buyer" element={<BuyertalkSidebar></BuyertalkSidebar>}>
            <Route path="demo" element={<Demo></Demo>}></Route>
           
          </Route>
          

          
        
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
