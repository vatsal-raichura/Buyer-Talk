// // import axios from "axios"
// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { data, useNavigate } from "react-router-dom";
// // import { Container, Card, Form, Button,Alert } from "react-bootstrap";
// // import { Bounce, toast, ToastContainer } from "react-toastify";
// // import { CustomLoader } from "../CustomLoader";

// // export const AddComplaints = () => {
// //   const { register, handleSubmit ,formState:{errors},watch } = useForm();
// //   //navigation...
// //   const navigate = useNavigate();

// //   const [isLoading, setisLoading] = useState(false);

// //   const notify = () => toast('Wow so easy!');

// //   const submitHandler = async(data) => {
// //     console.log(data);
// //     // data.businessId = "67c6ad52e7600a81cb3ca8d2"
// //       data.productId = "67c918e01e9f914ef10134dc"

// //     const userId = localStorage.getItem("id")
// //     data.userId = userId;

// //     const res = await axios.post("complaint/complaint",data)
// //     //res.status
// //     if(res.status === 201){

// //       toast('to create',{
// //                     position: "top-left",
// //                     autoClose: 5000,
// //                     hideProgressBar: false,
// //                     closeOnClick: false,
// //                     pauseOnHover: true,
// //                     draggable: true,
// //                     progress: undefined,
// //                     theme: "dark",
// //                     transition: Bounce,
// //                     });

// //       navigate("/user")

// //     }
// //     else{
// //       alert("Complaint not added")
// //       toast.error('record deleted !!', {
// //         position: "top-left",
// //         autoClose: 5000,
// //         hideProgressBar: false,
// //         closeOnClick: false,
// //         pauseOnHover: true,
// //         draggable: true,
// //         progress: undefined,
// //         theme: "dark",
// //         transition: Bounce,
// //         });
// //     }

// //   };

// //   const ValidationSchema = {

// //     descriptionValidator: {
// //       required: { value: true, message: " Complaint description is required *" },
// //     },
// //     filedDateValidator: {
// //       required: { value: true, message: "Complaint date is required *" },
// //     },
// //     statusValidator: {
// //         required: { value: true, message: "Complaint status is required *" },
// //       },
// //     categoryValidator: {
// //         required: { value: true, message: "Product category is required *" },
// //       },

// //   };

// //   return (
// //     <div>
// //       <ToastContainer
// //         position="top-left"
// //         autoClose={100}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick={false}
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         theme="dark"
// //         transition={Bounce}
// //       />

// //     {isLoading == true && <CustomLoader />}
// //     <Form onSubmit={handleSubmit(submitHandler)}>
// //       <Container
// //         fluid
// //         className="d-flex align-items-center justify-content-center min-vh-100"
// //         style={{
// //           backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
// //           <Card.Body className="px-4">
// //             <h2 className="text-uppercase text-center mb-4"> Complaints</h2>

// //             <Form.Group className="mb-2">
// //                                         <Form.Label>Product Category</Form.Label>
// //                                         <Form.Select {...register("category", ValidationSchema.categoryValidator)}>
// //                                             <option value="">Select Product Category</option>
// //                                             <option value="Electronics">Electronics</option>
// //                                             <option value="Clothing & Apparel">Clothing & Apparel</option>
// //                                             <option value="Beauty & Personal Care">Beauty & Personal Care</option>
// //                                             <option value="Home & Kitchen">Home & Kitchen</option>
// //                                             <option value="Grocery & Food">Grocery & Food</option>
// //                                             <option value="Automobiles & Accessories">Automobiles & Accessories</option>
// //                                             <option value="Books & Stationery">Books & Stationery</option>
// //                                             <option value="Sports & Fitness">Sports & Fitness</option>
// //                                             <option value="Toys & Baby Products">Toys & Baby Products</option>
// //                                             <option value="Healthcare & Medicine">Healthcare & Medicine</option>
// //                                             <option value="Services">Services</option>
// //                                         </Form.Select>
// //                                         <span className="text-danger">{errors.category?.message}</span>
// //                                     </Form.Group>

// //             <Form.Group className="mb-1">
// //               <Form.Label> Complaint Description</Form.Label>
// //               <Form.Control type="textArea" {...register("description", ValidationSchema.descriptionValidator)} />
// //               <Form.Text className="text-danger">{errors.description?.message}</Form.Text>
// //             </Form.Group>

// //             <Form.Group className="mb-2">
// //               <Form.Label>Complaint FiledDate</Form.Label>
// //               <Form.Control type="date" {...register("fileddate", ValidationSchema.filedDateValidator)} />
// //               <Form.Text className="text-danger">{errors.fileddate?.message}</Form.Text>
// //             </Form.Group>

// //              <Form.Group className="mb-2">
// //                                         <Form.Label>Complaint Status</Form.Label>
// //                                         <Form.Select {...register("status", ValidationSchema.statusValidator)}>
// //                                             <option value="">Select Complaint Status</option>
// //                                             <option value="Open">Open</option>
// //                                             <option value="Resolved">Resolved</option>
// //                                             <option value="Escalated">Escalted</option>

// //                                         </Form.Select>
// //                                         <span className="text-danger">{errors.status?.message}</span>
// //                                     </Form.Group>

// //             <Button type="submit" className="mt-4 w-100" variant="primary" size="lg">
// //               Submit
// //             </Button>
// //           </Card.Body>
// //         </Card>
// //       </Container>
// //     </Form>
// //     </div>
// //   );
// // };

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button, Alert } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { CustomLoader } from "../CustomLoader";

// export const AddComplaints = () => {
//   const { register, handleSubmit, formState: { errors }, watch } = useForm();
//   const navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [products, setProducts] = useState([]);

//   // Function to Fetch Products by Category
//   const fetchProductsByCategory = async (category) => {
//     if (!category) {
//       setProducts([]); // Reset products if no category is selected
//       return;
//     }

//     try {
//       const response = await axios.get(`/product/getProductByCategory/${category}`);
//       setProducts(response.data.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setProducts([]);
//     }
//   };

//   // Handle Form Submission
//   const submitHandler = async (data) => {
//     setIsLoading(true);
//     data.userId = localStorage.getItem("id");

//     try {
//       const res = await axios.post("/complaint/complaint", data);

//       if (res.status === 201) {
//         toast.success("Complaint created successfully!", { theme: "dark", transition: Bounce });
//         navigate("/user");
//       } else {
//         toast.error("Complaint not added!", { theme: "dark", transition: Bounce });
//       }
//     } catch (error) {
//       toast.error("An error occurred while submitting the complaint!", { theme: "dark", transition: Bounce });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Validation Rules
//   const ValidationSchema = {
//     descriptionValidator: { required: { value: true, message: "Complaint description is required *" } },
//     filedDateValidator: { required: { value: true, message: "Complaint date is required *" } },
//     statusValidator: { required: { value: true, message: "Complaint status is required *" } },
//     categoryValidator: { required: { value: true, message: "Product category is required *" } },
//     productValidator: { required: { value: true, message: "Product selection is required *" } },
//   };

//   return (
//     <div>
//       <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />

//       {isLoading && <CustomLoader />}

//       <Form onSubmit={handleSubmit(submitHandler)}>
//         <Container
//           fluid
//           className="d-flex align-items-center justify-content-center min-vh-100"
//           style={{
//             backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
//             <Card.Body className="px-4">
//               <h2 className="text-uppercase text-center mb-4">Complaints</h2>

//               {/* Category Selection */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Product Category</Form.Label>
//                 <Form.Select
//                   {...register("category", ValidationSchema.categoryValidator)}
//                   onChange={(e) => {
//                     setSelectedCategory(e.target.value);
//                     fetchProductsByCategory(e.target.value);
//                   }}
//                 >
//                   <option value="">Select Product Category</option>
//                   <option value="Electronics">Electronics</option>
//                   <option value="Clothing & Apparel">Clothing & Apparel</option>
//                   <option value="Beauty & Personal Care">Beauty & Personal Care</option>
//                   <option value="Home & Kitchen">Home & Kitchen</option>
//                   <option value="Grocery & Food">Grocery & Food</option>
//                   <option value="Automobiles & Accessories">Automobiles & Accessories</option>
//                   <option value="Books & Stationery">Books & Stationery</option>
//                   <option value="Sports & Fitness">Sports & Fitness</option>
//                   <option value="Toys & Baby Products">Toys & Baby Products</option>
//                   <option value="Healthcare & Medicine">Healthcare & Medicine</option>
//                   <option value="Services">Services</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.category?.message}</span>
//               </Form.Group>

//               {/* Product Selection (Filtered by Category) */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Product</Form.Label>
//                 <Form.Select {...register("productId", ValidationSchema.productValidator)}>
//                   <option value="">Select Product</option>
//                   {products.map((product) => (
//                     <option key={product._id} value={product._id}>
//                       {product.name}
//                     </option>
//                   ))}
//                 </Form.Select>
//                 <span className="text-danger">{errors.productId?.message}</span>
//               </Form.Group>

//               {/* Complaint Description */}
//               <Form.Group className="mb-1">
//                 <Form.Label>Complaint Description</Form.Label>
//                 <Form.Control type="textArea" {...register("description", ValidationSchema.descriptionValidator)} />
//                 <Form.Text className="text-danger">{errors.description?.message}</Form.Text>
//               </Form.Group>

//               {/* Filed Date */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Complaint Filed Date</Form.Label>
//                 <Form.Control type="date" {...register("fileddate", ValidationSchema.filedDateValidator)} />
//                 <Form.Text className="text-danger">{errors.fileddate?.message}</Form.Text>
//               </Form.Group>

//               {/* Complaint Status */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Complaint Status</Form.Label>
//                 <Form.Select {...register("status", ValidationSchema.statusValidator)}>
//                   <option value="">Select Complaint Status</option>
//                   <option value="Open">Open</option>
//                   <option value="Resolved">Resolved</option>
//                   <option value="Escalated">Escalated</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.status?.message}</span>
//               </Form.Group>

//               {/* Submit Button */}
//               <Button type="submit" className="mt-4 w-100" variant="primary" size="lg">
//                 Submit
//               </Button>
//             </Card.Body>
//           </Card>
//         </Container>
//       </Form>
//     </div>
//   );
// };

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { CustomLoader } from "../CustomLoader";

// export const AddComplaints = () => {
//   const { register, handleSubmit, formState: { errors }, watch } = useForm();
//   const navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [products, setProducts] = useState([]);

//   // Fetch Products by Category (Using Category Name)
//   const fetchProductsByCategory = async (category) => {
//     if (!category) {
//       setProducts([]); // Reset if no category selected
//       return;
//     }

//     try {
//       setIsLoading(true)
//       const response = await axios.get(`/product/getProductByCategory/${category}`); // API expects category name
//       setProducts(response.data.data);

//       setIsLoading(false)

//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setProducts([]);
//     }
//   };

//   // Handle Form Submission
//   const submitHandler = async (data) => {
//     setIsLoading(true);
//     data.userId = localStorage.getItem("id");

//     try {
//       const res = await axios.post("/complaint/complaint", data);

//       if (res.status === 201) {
//         toast.success("Complaint created successfully!", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "dark",
//         });
//         setTimeout(() => navigate("/user"), 2000);

//       } else {
//         toast.error("Complaint not added!", {
//           position: "top-right",
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       toast.error("An error occurred while submitting the complaint!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Validation Rules
//   const ValidationSchema = {
//     descriptionValidator: { required: { value: true, message: "Complaint description is required *" } },
//     filedDateValidator: { required: { value: true, message: "Complaint date is required *" } },
//     statusValidator: { required: { value: true, message: "Complaint status is required *" } },
//     categoryValidator: { required: { value: true, message: "Product category is required *" } },
//     productValidator: { required: { value: true, message: "Product selection is required *" } },
//   };

//   return (
//     <div>
//       <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />

//       {isLoading && <CustomLoader />}

//       <Form onSubmit={handleSubmit(submitHandler)}>
//         <Container
//           fluid
//           className="d-flex align-items-center justify-content-center min-vh-100"
//           style={{
//             backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
//             <Card.Body className="px-4">
//               <h2 className="text-uppercase text-center mb-4">Complaints</h2>

//               {/* Category Selection */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Product Category</Form.Label>
//                 <Form.Select
//                   {...register("category", ValidationSchema.categoryValidator)}
//                   onChange={(e) => {
//                     const category = e.target.value;
//                     setSelectedCategory(category);
//                     fetchProductsByCategory(category);
//                   }}
//                 >
//                   <option value="">Select Product Category</option>
//                   <option value="Electronics">Electronics</option>
//                   <option value="Clothing & Apparel">Clothing & Apparel</option>
//                   <option value="Beauty & Personal Care">Beauty & Personal Care</option>
//                   <option value="Home & Kitchen">Home & Kitchen</option>
//                   <option value="Grocery & Food">Grocery & Food</option>
//                   <option value="Automobiles & Accessories">Automobiles & Accessories</option>
//                   <option value="Books & Stationery">Books & Stationery</option>
//                   <option value="Sports & Fitness">Sports & Fitness</option>
//                   <option value="Toys & Baby Products">Toys & Baby Products</option>
//                   <option value="Healthcare & Medicine">Healthcare & Medicine</option>
//                   <option value="Services">Services</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.category?.message}</span>
//               </Form.Group>

//               {/* Product Selection (Filtered by Category Name) */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Product</Form.Label>
//                 <Form.Select {...register("productId", ValidationSchema.productValidator)}>
//                   <option value="">Select Product</option>
//                   {products.map((product) => (
//                     <option key={product._id} value={product._id}>
//                       {product.name}
//                     </option>
//                   ))}
//                 </Form.Select>
//                 <span className="text-danger">{errors.productId?.message}</span>
//               </Form.Group>

//               {/* Complaint Description */}
//               <Form.Group className="mb-1">
//                 <Form.Label>Complaint Description</Form.Label>
//                 <Form.Control type="textArea" {...register("description", ValidationSchema.descriptionValidator)} />
//                 <Form.Text className="text-danger">{errors.description?.message}</Form.Text>
//               </Form.Group>

//               {/* Filed Date */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Complaint Filed Date</Form.Label>
//                 <Form.Control type="date" {...register("fileddate", ValidationSchema.filedDateValidator)} />
//                 <Form.Text className="text-danger">{errors.fileddate?.message}</Form.Text>
//               </Form.Group>

//               {/* Complaint Status */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Complaint Status</Form.Label>
//                 <Form.Select {...register("status", ValidationSchema.statusValidator)}>
//                   <option value="">Select Complaint Status</option>
//                   <option value="Open">Open</option>
//                   <option value="Resolved">Resolved</option>
//                   <option value="Escalated">Escalated</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.status?.message}</span>
//               </Form.Group>

//               {/* Submit Button */}
//               <Button type="submit" className="mt-4 w-100" variant="primary" size="lg">
//                 Submit
//               </Button>
//             </Card.Body>
//           </Card>
//         </Container>
//       </Form>
//     </div>
//   );
// };

// import axios from "axios";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { CustomLoader } from "../CustomLoader";

// export const AddComplaints = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [products, setProducts] = useState([]);

//   const fetchProductsByCategory = async (category) => {
//     if (!category) {
//       setProducts([]);
//       return;
//     }
//     try {
//       const response = await axios.get(`/product/getProductByCategory/${encodeURIComponent(category)}`);
//       setProducts(response.data.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setProducts([]);
//     }
//   };

//   const submitHandler = async (data) => {
//     setIsLoading(true);
//     data.userId = localStorage.getItem("id");

//     if (!data.category || !data.productId || !data.description || !data.fileddate ) {
//       toast.error("Please fill all required fields!", { autoClose: 3000 });
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.post("/complaint/complaint", data);
//       if (res.status === 201) {
//         toast.success("Complaint created successfully!", { autoClose: 3000 });
//         setTimeout(() => navigate("/user"), 2000);
//       } else {
//         toast.error("Complaint not added!", { autoClose: 3000 });
//       }
//     } catch (error) {
//       toast.error("An error occurred while submitting the complaint!", { autoClose: 3000 });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />
//       {isLoading && <CustomLoader />}

//       <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
//         <Card className="p-4 shadow-lg" style={{ maxWidth: "550px", width: "100%" }}>
//           <Card.Body>
//             <h3 className="text-center mb-4">FILE A COMPLAINT</h3>

//             <Form onSubmit={handleSubmit(submitHandler)}>
//               {/* Product Category */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Product Category</Form.Label>
//                 <Form.Select
//                   {...register("category", { required: "Product category is required *" })}
//                   onChange={(e) => fetchProductsByCategory(e.target.value)}
//                 >
//                   <option value="">Select Category</option>
//                   {["Electronics", "Clothing & Apparel", "Beauty & Personal Care", "Home & Kitchen", "Grocery & Food",
//                     "Automobiles & Accessories", "Books & Stationery", "Sports & Fitness", "Toys & Baby Products",
//                     "Healthcare & Medicine", "Services"].map((cat) => (
//                       <option key={cat} value={cat}>{cat}</option>
//                   ))}
//                 </Form.Select>
//                 <span className="text-danger">{errors.category?.message}</span>
//               </Form.Group>

//               {/* Product */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Product</Form.Label>
//                 <Form.Select {...register("productId", { required: "Product selection is required *" })}>
//                   <option value="">Select Product</option>
//                   {products.map((product) => (
//                     <option key={product._id} value={product._id}>{product.name}</option>
//                   ))}
//                 </Form.Select>
//                 <span className="text-danger">{errors.productId?.message}</span>
//               </Form.Group>

//               {/* Complaint Description */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   {...register("description", { required: "Description is required *" })}
//                 />
//                 <span className="text-danger">{errors.description?.message}</span>
//               </Form.Group>

//               {/* Filed Date */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Filed Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   {...register("fileddate", { required: "Filed date is required *" })}
//                 />
//                 <span className="text-danger">{errors.fileddate?.message}</span>
//               </Form.Group>

//               {/* Submit Button */}
//               <Button type="submit" className="w-100" variant="primary">
//                 Submit Complaint
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// };

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { CustomLoader } from "../CustomLoader";
import { FaExclamationTriangle } from "react-icons/fa";
import "../../assets/addcomplaints.css" 

export const AddComplaints = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProductsByCategory = async (category) => {
    if (!category) {
      setProducts([]);
      return;
    }
    try {
      const response = await axios.get(
        `/product/getProductByCategory/${encodeURIComponent(category)}`
      );
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  const submitHandler = async (data) => {
    setIsLoading(true);
    data.userId = localStorage.getItem("id");

    if (
      !data.category ||
      !data.productId ||
      !data.description ||
      !data.fileddate
    ) {
      toast.error("Please fill all required fields!", { autoClose: 3000 });
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post("/complaint/complaint", data);
      if (res.status === 201) {
        toast.success("Complaint created successfully!", { autoClose: 3000 });
        setTimeout(() => navigate("/user/viewmycomplaints"), 2000);
      } else {
        toast.error("Complaint not added!", { autoClose: 3000 });
      }
    } catch (error) {
      toast.error("An error occurred while submitting the complaint!", {
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="complaints-bg">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        theme="dark"
        transition={Bounce}
      />
      {isLoading && <CustomLoader />}

      <div 
        style={{
          
          
          minHeight: "100vh",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
        className="d-flex align-items-center justify-content-center  "
      >
        <Card
          className="shadow-lg"
          style={{
            maxWidth: "620px",
            width: "100%",
            borderRadius: "16px",
            backgroundColor: "#ffffffdd",
            backdropFilter: "blur(10px)",
          }}
        >
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <FaExclamationTriangle size={40} className="text-danger mb-2" />
              <h3 className="fw-bold text-primary">File a Complaint</h3>
              <p className="text-muted">
                Please describe your issue clearly so we can help.
              </p>
              <hr className="my-3" style={{ borderTop: "2px solid #ccc" }} />
            </div>

            <Form onSubmit={handleSubmit(submitHandler)}>
              {/* Product Category */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Product Category
                </Form.Label>
                <Form.Select
                  {...register("category", {
                    required: "Product category is required *",
                  })}
                  className="form-control"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#1976d2",
                    borderRadius: "8px",
                    color: "#333",
                    
                     
                      padding: "5px 12px", // add this
                    
                    
                  }}
                  onChange={(e) => fetchProductsByCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {[
                    "Electronics",
                    "Clothing & Apparel",
                    "Beauty & Personal Care",
                    "Home & Kitchen",
                    "Grocery & Food",
                    "Automobiles & Accessories",
                    "Books & Stationery",
                    "Sports & Fitness",
                    "Toys & Baby Products",
                    "Healthcare & Medicine",
                    "Services",
                  ].map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Select>
                <span className="text-danger">{errors.category?.message}</span>
              </Form.Group>

              {/* Product */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Product
                </Form.Label>
                <Form.Select
                  {...register("productId", {
                    required: "Product selection is required *",
                  })}
                  className="form-control"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#1976d2",
                    borderRadius: "8px",
                    color: "#333",
                    padding: "5px 12px", 
                  }}
                >
                  <option value="">Select Product</option>
                  {products.map((product) => (
                    <option key={product._id} value={product._id}>
                      {product.name}
                    </option>
                  ))}
                </Form.Select>
                <span className="text-danger">{errors.productId?.message}</span>
              </Form.Group>

              {/* Complaint Description */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="form-control"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#1976d2",
                    borderRadius: "8px",
                    color: "#333",
                    padding: "10px 12px", 
                  }}
                  placeholder="Explain the issue you faced with this product..."
                  {...register("description", {
                    required: "Description is required *",
                  })}
                />
                <span className="text-danger">
                  {errors.description?.message}
                </span>
              </Form.Group>

              {/* Filed Date */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold text-secondary">
                  Filed Date
                </Form.Label>
                <Form.Control
                  type="date"
                  className="form-control"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#1976d2",
                    borderRadius: "8px",
                    color: "#333",
                  }}
                  {...register("fileddate", {
                    required: "Filed date is required *",
                  })}
                />
                <span className="text-danger">{errors.fileddate?.message}</span>
              </Form.Group>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-100 fw-semibold"
                variant="danger"
                style={{
                  backgroundColor: "#d32f2f",
                  border: "none",
                  borderRadius: "8px",
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner size="sm" animation="border" className="me-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit "
                )}
              </Button>
            </Form>

            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
