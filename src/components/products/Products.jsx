import axios from "axios"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button,Alert } from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { CustomLoader } from "../CustomLoader";

export const Products = () => {
  const { register, handleSubmit ,formState:{errors},watch } = useForm();
  //navigation...
  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);

  const notify = () => toast('Wow so easy!');

  const submitHandler = async(data) => {
    console.log(data);
    // data.businessId = "67c6ad52e7600a81cb3ca8d2"
      data.categoryId = "67c6886f0f088ca65e794157"

   

    const businessId = localStorage.getItem("id")
    data.businessId = businessId;
    

    const res = await axios.post("/product/products",data)
    //res.status
    if(res.status === 201){
      alert("User created successfully")
      toast('to create',{
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

      navigate("/product")
      
     
    }
    else{
      alert("User not created")
      toast.error('record deleted !!', {
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
    nameValidator: {
      required: { value: true, message: "Product Name is required *" },
    },
    descriptionValidator: {
      required: { value: true, message: " Product description is required *" },
    },
    categoryValidator: {
      required: { value: true, message: "Product category is required *" },
    },
    brandValidator: {
      required: { value: true, message: "Product Brand is required *" },
      
    },
    ratingValidator: {
      required: { value: true, message: "Product Rating is required *" },
      min: { value: 1, message: "Minimum Rating  is  1 " },
      max:{value: 5, message: "Maximum Rating is 5" }
    },
    priceValidator: {
      required: { value: true, message: "Product Price is required *" },
      min: { value: 1, message: "Price is not valid" },

      
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
     

    {isLoading == true && <CustomLoader />}
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
            <h2 className="text-uppercase text-center mb-4"> Products</h2>
            
            <Form.Group className="mb-1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" {...register("name", ValidationSchema.nameValidator)} />
              <Form.Text className="text-danger">{errors.name?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label> Product Description</Form.Label>
              <Form.Control type="textArea" {...register("description", ValidationSchema.descriptionValidator)} />
              <Form.Text className="text-danger">{errors.description?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
                            <Form.Label>Product Category</Form.Label>
                            <Form.Select {...register("category", ValidationSchema.categoryValidator)}>
                                <option value="">Select Product Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing & Apparel">Clothing & Apparel</option>
                                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                                <option value="Home & Kitchen">Home & Kitchen</option>
                                <option value="Grocery & Food">Grocery & Food</option>
                                <option value="Automobiles & Accessories">Automobiles & Accessories</option>
                                <option value="Books & Stationery">Books & Stationery</option>
                                <option value="Sports & Fitness">Sports & Fitness</option>
                                <option value="Toys & Baby Products">Toys & Baby Products</option>
                                <option value="Healthcare & Medicine">Healthcare & Medicine</option>
                                <option value="Services">Services</option>
                            </Form.Select>
                            <span className="text-danger">{errors.category?.message}</span>
                        </Form.Group>



            <Form.Group className="mb-2">
              <Form.Label>Product Brand</Form.Label>
              <Form.Control type="text" {...register("brand", ValidationSchema.brandValidator)} />
              <Form.Text className="text-danger">{errors.brand?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Product Rating</Form.Label>
              <Form.Control type="number" {...register("rating", ValidationSchema.ratingValidator)} />
              <Form.Text className="text-danger">{errors.rating?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="number" {...register("price", ValidationSchema.priceValidator)} />
              <Form.Text className="text-danger">{errors.price?.message}</Form.Text>
            </Form.Group>

           

            <Button type="submit" className="mt-4 w-100" variant="primary" size="lg">
              Submit
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Form>
    </div>
  );
};


