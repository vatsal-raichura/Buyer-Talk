import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button ,Alert } from "react-bootstrap";
import { CustomLoader } from '../CustomLoader';
import { Bounce, toast, ToastContainer } from "react-toastify";





export const BusinessLogin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading,setisLoading] = useState(false)



  

  const navigate = useNavigate();

 
  const submitHandler = async(data) => {

    try{

    setisLoading(true)
   
    const res = await axios.post("/business/login", data)
    setisLoading(false)
    console.log(res.data)
    if(res.status === 200){
     
      toast.success('login successfully',{
                          position: "top-left",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          transition: Bounce,
                          });

      localStorage.setItem("id",res.data.data._id)
      localStorage.setItem("role",res.data.data.roleId.name)

      

      if(res.data.data.roleId.name === "business"){
        setTimeout(()=>{navigate("/business")},2500)
      }
    }}
    catch (error) {
          const status = error?.response?.status;
          const message = error?.response?.data?.message;
    
          if (status === 403) {
            toast.error("Your account is blocked by the admin.", {
              position: "top-center",
              autoClose: 5000,
              theme: "dark",
              transition: Bounce,
            });
          } else if (status === 404) {
            toast.error("Email not found. Please register first.", {
              position: "top-center",
              autoClose: 5000,
              theme: "dark",
              transition: Bounce,
            });
          } else if (status === 401) {
            toast.error("Invalid credentials!", {
              position: "top-center",
              autoClose: 5000,
              theme: "dark",
              transition: Bounce,
            });
          } else {
            toast.error("Something went wrong. Please try again.", {
              position: "top-center",
              autoClose: 5000,
              theme: "dark",
              transition: Bounce,
            });
          }
        }
  }

  const ValidationSchema = {
    emailValidator: {
      required: {
        value: true,
        message: "Email is required *",
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required *",
      },
      minLength: {
        value: 8,
        message: "Minimum length is 8",
      },
    },
  };

  return (
    <div>
      <ToastContainer
                          position="top-left"
                          autoClose={100}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={false}
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="dark"
                          transition={Bounce}
                        />
       {isLoading==true && <CustomLoader />}
    <Container
    fluid
    className="d-flex align-items-center justify-content-center min-vh-100"
    style={{
      backgroundImage:
        "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Card className="p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
      <Card.Body>
        <h2 className="text-uppercase text-center mb-4">Business Sign In</h2>
        <Form onSubmit={handleSubmit(submitHandler)}>
          {/* Email Input */}
          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              {...register("email", ValidationSchema.emailValidator)}
            />
            <Form.Text className="text-danger">{errors.email?.message}</Form.Text> 
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", ValidationSchema.passwordValidator)}
            />
            <Form.Text className="text-danger">{errors.password?.message}</Form.Text> 
          </Form.Group>

          <div className="text-center my-2">
            <Link to="/businessForgotPassword">Forgot password?</Link>
          </div>

          {/* Submit Button */}
          <Button variant="primary" className="w-100" type="submit">
            Log In
          </Button>
        </Form>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/businessSignup">Register here</Link>
        </p>

        {/* Social Media Buttons */}
        {/* <div className="text-center mt-3">
          <p>or sign up with:</p>
          <div className="d-flex justify-content-center gap-2">
            {[
              { name: "Facebook", icon: "fa-facebook-f", color: "#1877f2" },
              { name: "Twitter", icon: "fa-twitter", color: "#1da1f2" },
              { name: "Google", icon: "fa-google", color: "#db4437" },
              { name: "GitHub", icon: "fa-github", color: "#333" },
            ].map(({ name, icon, color }) => (
              <Button key={name} variant="light" className="p-2 border" style={{ color }}>
                <i className={`fab ${icon}`}></i>
              </Button>
            ))}
          </div>
        </div> */}
      </Card.Body>
    </Card>
  </Container>
  </div>
);
};
  