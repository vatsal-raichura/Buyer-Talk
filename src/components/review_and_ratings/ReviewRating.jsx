import React, { useState } from "react";
import axios from "axios"
import { useForm } from 'react-hook-form'
import { data, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button,Alert } from "react-bootstrap";
import { CustomLoader } from "../CustomLoader";
import { Bounce, toast, ToastContainer } from "react-toastify";





export const ReviewRating = () => {
    const { register, handleSubmit ,formState:{errors},watch } = useForm();
  //navigation...
  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);
  const submitHandler = async(data) => {
    console.log(data);
   // data.businessId = "67c83311a2842818e75283d4"
    data.productId = "67c839ebbbc005ce3673ce05"


    const userId=localStorage.getItem("id")
    data.userId=userId;
    console.log(data);
    //array -->0th index access.

    const formData = new FormData();
   
   
    formData.append("userId",data.userId);
    formData.append("productId",data.productId);
    formData.append("rating",data.rating);
    formData.append("comment",data.comment);
    formData.append("review__date",data.review__date);

    setisLoading(true)
    


    const res = await axios.post("rating/addRating", formData);

    setisLoading(false)
    console.log(res); //axios
    
    console.log(res.data); //api response

    if(res.status === 200){
            
            console.log("Response Status:", res.status);
            toast.success('product  created successfully',{
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
      
            setTimeout(()=>{navigate("/review_and_ratings")},2500)

    }

    
    else{
      
      toast.error('product  not created !!', {
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
    }
   
  };
    const ValidationSchema = {
        commentValidator: {
          required: { value: true, message: "Comment is required *" },
        },
       
       
        ratingValidator: {
          required: { value: true, message: "Product Rating is required *" },
          min: { value: 1, message: "Minimum Rating  is  1 " },
          max:{value: 5, message: "Maximum Rating is 5" }
        },
        review_dateValidator: {
          required: { value: true, message: "Review Date is required *" },
          min: { value: 1, message: "Review Date is not valid" },
    
          
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
        <Form onSubmit={handleSubmit(submitHandler)}>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center min-vh-100"
        style={{
          backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
          <Card.Body className="px-4">
            <h2 className="text-uppercase text-center mb-4"> Review and Rating</h2>
            
            <Form.Group className="mb-1">
              <Form.Label>Review and Comments</Form.Label>
              <Form.Control type="text" {...register("comment", ValidationSchema.commentValidator)} />
              <Form.Text className="text-danger">{errors.comment?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label> Rating</Form.Label>
              <Form.Control type="textArea" {...register("rating", ValidationSchema.ratingValidator)} />
              <Form.Text className="text-danger">{errors.rating?.message}</Form.Text>
            </Form.Group>

            

            <Form.Group className="mb-2">
              <Form.Label>Review Date</Form.Label>
              <Form.Control type="date" {...register("review_date", ValidationSchema.review_dateValidator)} />
              <Form.Text className="text-danger">{errors.review__date?.message}</Form.Text>
            </Form.Group>

            
            

           

            <Button type="submit" className="mt-4 w-100" variant="primary" size="lg">
              Submit
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Form>
    </div>
  )
}
