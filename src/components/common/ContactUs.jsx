import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { CustomLoader } from "../CustomLoader";
import "../../assets/contactus.css";


export const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const handleBackClick = () => {
    const role = localStorage.getItem("role");
   
  
    
    if (role === "user") {
      navigate("/user/userprofile");
    } else if (role === "business") {
      navigate("/business/businessprofile");
    } else {
      navigate("/"); // fallback to home or landing page
    }
  };
  

  const submitHandler = async (data) => {
    console.log(data);
    setisLoading(true);

    try {
      const res = await axios.post("/contact/contactUs", data);
      setisLoading(false);

      if (res.status === 200) {
        toast.success('Message sent successfully!', { transition: Bounce, theme: "dark" });
        const role = localStorage.getItem("role")
        setTimeout(() => {
          if(role==="user"){
            navigate("/user/userprofile")
          }  else if(role==="business"){
            navigate("/business/businessprofile")
          } else{
            navigate("/")
          }
        }, 2500);
      }
    } catch (error) {
      setisLoading(false);
      toast.error('Failed to send the message. Please try again.', { transition: Bounce, theme: "dark" });
    }
  };

  const ValidationSchema = {
    nameValidator: {
      required: { value: true, message: "Name is required *" },
    },
    emailValidator: {
      required: { value: true, message: "Email is required *" },
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" },
    },
    messageValidator: {
      required: { value: true, message: "Message is required *" },
      minLength: { value: 10, message: "Message must be at least 10 characters" },
    },
  };

  return (
    <div  style={{backgroundImage:"url(/src/assets/images/photo-1423666639041-f56000c27a9a.avif)"}}>
      <ToastContainer position="top-left" autoClose={5000} theme="dark" transition={Bounce} />
      {isLoading && <CustomLoader></CustomLoader> }
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" >
          <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
            <Card.Body className="px-4">
              <h2 className="text-uppercase text-center mb-4">Contact Us</h2>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" {...register("name", ValidationSchema.nameValidator)} />
                <Form.Text className="text-danger">{errors.name?.message}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" {...register("email", ValidationSchema.emailValidator)} />
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} {...register("message", ValidationSchema.messageValidator)} />
                <Form.Text className="text-danger">{errors.message?.message}</Form.Text>
              </Form.Group>

              <Button type="submit" className="mt-3 w-100" variant="primary" size="lg">
                Send Message
              </Button>
              <div className="text-center mt-3">
  <Button
    variant="outline-primary"
    className="fw-semibold px-4 py-2 rounded-pill"
    onClick={handleBackClick}
  >
    ← Back to Dashboard
  </Button>
</div>

            </Card.Body>
          </Card>
        </Container>
      </Form>
    </div>
  );
};