import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { CustomLoader } from "../CustomLoader";

export const BusinessSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  //navigation...
  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);

  const notify = () => toast("Wow so easy!");

  const submitHandler = async (data) => {
    console.log(data);
    // const roleId = localStorage.getItem("id")
    // data.roleId = roleId;
    data.roleId = "67c6a9b39ecb2ba13edb421e";

    data.userId = "67c91e401e9f914ef10134e4";

    setisLoading(true);

    const res = await axios.post("/business/signup", data);

    setisLoading(false);
    //res.status
    if (res.status === 201) {
     

      toast.success("Business created successfully", {
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

      setTimeout(() => {
        navigate("/businessLogin");
      }, 2500);
    } else {
      
      toast.error('business created failed',{
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
    businessnameValidator: {
      required: { value: true, message: "Business Name is required *" },
    },

    emailValidator: {
      required: { value: true, message: "Email is required *" },
    },
    descriptionValidator: {
      required: { value: true, message: "Description is required *" },
    },
    statusValidator: {
      required: { value: true, message: "Status is required *" },
    },

    numberValidator: {
      required: { value: true, message: "Contact No is required *" },
      patownernametern: {
        value: /^[6-9][0-9]{9}$/,
        message: "Contact is not valid",
      },
    },
    passwordValidator: {
      required: { value: true, message: "Password is required *" },
      minLength: { value: 8, message: "Minimum length is 8 characters" },
    },
    rpasswordValidator: {
      required: { value: true, message: "Repeat password is required *" },
      minLength: { value: 8, message: "Minimum length is 8 characters" },
      validate: (value) =>
        value === watch("password") || "Your password does not match",
    },
    checkBoxValidator: {
      required: {
        value: true,
        message: "You must accept the terms and conditions",
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
      {isLoading == true && <CustomLoader />}
      

      {isLoading == true && <CustomLoader />}
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Container
          fluid
          className="d-flex align-items-center justify-content-center min-vh-100"
          style={{
            backgroundImage:
              "url(/src/assets/images/online-registration-form-modish-form-filling-internet-website_31965-234555.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card
            className="m-3 p-3 shadow-lg"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <Card.Body className="px-4">
              <h2 className="text-uppercase text-center mb-4">
                Create an Account
              </h2>

              <Form.Group className="mb-1">
                <Form.Label>Your Business Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register(
                    "businessname",
                    ValidationSchema.businessnameValidator
                  )}
                />
                <Form.Text className="text-danger">
                  {errors.businessname?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", ValidationSchema.emailValidator)}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Your Description</Form.Label>
                <Form.Control
                  type="text"
                  {...register(
                    "description",
                    ValidationSchema.descriptionValidator
                  )}
                />
                <Form.Text className="text-danger">
                  {errors.description?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Your Contact No</Form.Label>
                <Form.Control
                  type="text"
                  {...register("contact_no", ValidationSchema.numberValidator)}
                />
                <Form.Text className="text-danger">
                  {errors.contact_no?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Your Status</Form.Label>
                <Form.Control
                  type="text"
                  {...register("status", ValidationSchema.statusValidator)}
                />
                <Form.Text className="text-danger">
                  {errors.status?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", ValidationSchema.passwordValidator)}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Repeat your password</Form.Label>
                <Form.Control
                  type="password"
                  {...register(
                    "rpassword",
                    ValidationSchema.rpasswordValidator
                  )}
                />
                <Form.Text className="text-danger">
                  {errors.rpassword?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="d-flex flex-column justify-content-center mt-3">
                <Form.Check
                  type="checkbox"
                  label="I agree to the Terms of Service"
                  {...register("terms", {
                    required: "You must accept the terms and conditions",
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.terms?.message}
                </Form.Text>
              </Form.Group>

              <Button
                type="submit"
                className="mt-4 w-100"
                variant="primary"
                size="lg"
              >
                Register
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </Form>
    </div>
  );
};
