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
// import { useForm,Controller } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { CustomLoader } from "../CustomLoader";
// import ReactStars from "react-rating-stars-component";
// import StarRatings from "react-star-ratings";

// export const AddReviewAndRatings = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//     control
//   } = useForm();
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
//       setIsLoading(true);
//       const response = await axios.get(
//         `/product/getProductByCategory/${category}`
//       ); // API expects category name
//       setProducts(response.data.data);

//       setIsLoading(false);
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
//       const res = await axios.post("rating/rating", data);

//       if (res.status === 201) {
//         toast.success(" Review and Rating add successfully!", {
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
//         toast.error("Review and Rating not added!", {
//           position: "top-right",
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       toast.error("An error occurred while submitting the review and rating!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Validation Rules
//   const ValidationSchema = {
//     commentValidator: {
//       required: { value: true, message: "Comment is required *" },
//     },
//     ratingValidator: {
//       required: { value: true, message: "Product Rating is required *" },
//       min: { value: 1, message: "Minimum Rating  is  1 " },
//       max: { value: 5, message: "Maximum Rating is 5" },
//     },
//     review_dateValidator: {
//       required: { value: true, message: "Review Date is required *" },
//       min: { value: 1, message: "Review Date is not valid" },
//     },
//     categoryValidator: {
//       required: { value: true, message: "Product category is required *" },
//     },
//     productValidator: {
//       required: { value: true, message: "Product selection is required *" },
//     },
//   };

//   return (
//     <div>
//       <ToastContainer
//         position="top-left"
//         autoClose={5000}
//         hideProgressBar={false}
//         theme="dark"
//         transition={Bounce}
//       />

//       {isLoading && <CustomLoader />}

//       <Form onSubmit={handleSubmit(submitHandler)}>
//         <Container
//           fluid
//           className="d-flex align-items-center justify-content-center min-vh-100"
//           style={{
//             backgroundImage:
//               "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Card
//             className="m-3 p-3 shadow-lg"
//             style={{ maxWidth: "500px", width: "100%" }}
//           >
//             <Card.Body className="px-4">
//               <h2 className="text-uppercase text-center mb-4">
//                 Add Review and Ratings
//               </h2>

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
//                   <option value="Beauty & Personal Care">
//                     Beauty & Personal Care
//                   </option>
//                   <option value="Home & Kitchen">Home & Kitchen</option>
//                   <option value="Grocery & Food">Grocery & Food</option>
//                   <option value="Automobiles & Accessories">
//                     Automobiles & Accessories
//                   </option>
//                   <option value="Books & Stationery">Books & Stationery</option>
//                   <option value="Sports & Fitness">Sports & Fitness</option>
//                   <option value="Toys & Baby Products">
//                     Toys & Baby Products
//                   </option>
//                   <option value="Healthcare & Medicine">
//                     Healthcare & Medicine
//                   </option>
//                   <option value="Services">Services</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.category?.message}</span>
//               </Form.Group>

//               {/* Product Selection (Filtered by Category Name) */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Product</Form.Label>
//                 <Form.Select
//                   {...register("productId", ValidationSchema.productValidator)}
//                 >
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
//                 <Form.Label>Review and Comments</Form.Label>
//                 <Form.Control
//                   type="text"
//                   {...register("comment", ValidationSchema.commentValidator)}
//                 />
//                 <Form.Text className="text-danger">
//                   {errors.comment?.message}
//                 </Form.Text>
//               </Form.Group>

//               {/* Filed Date */}
//               {/* <Form.Group className="mb-1">
//                             <Form.Label> Rating</Form.Label>
//                             <Form.Control type="textArea" {...register("rating", ValidationSchema.ratingValidator)} />
//                             <Form.Text className="text-danger">{errors.rating?.message}</Form.Text>
//                </Form.Group> */}

// <Form.Group className="mb-3">
//   <Form.Label className="fw-bold">Rating</Form.Label>
//   <Controller
//     name="rating"
//     control={control}
//     rules={ValidationSchema.ratingValidator}
//     render={({ field: { onChange, value } }) => (
//       <div style={{ fontSize: "20px", padding: "5px" }}>
//         <StarRatings
//           rating={value || 0}  // Ensure default value
//           starRatedColor="#ffd700"
//           changeRating={(newRating) => onChange(newRating || 0)}
//           numberOfStars={5}
//           name="rating"
//           starDimension="30px"  // Increase star size
//           starSpacing="5px"
//         />
//       </div>
//     )}
//   />
//   <Form.Text className="text-danger">
//     {errors.rating?.message}
//   </Form.Text>
// </Form.Group>

//               {/* Complaint Status */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Review Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   {...register(
//                     "review_date",
//                     ValidationSchema.review_dateValidator
//                   )}
//                 />
//                 <Form.Text className="text-danger">
//                   {errors.review__date?.message}
//                 </Form.Text>
//               </Form.Group>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 className="mt-4 w-100"
//                 variant="primary"
//                 size="lg"
//               >
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
// import { useForm, Controller } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { CustomLoader } from "../CustomLoader";

// import ReactStars from "react-stars";
// import StarRatings from "react-star-ratings";

// export const AddReviewAndRatings = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//     clearErrors,
//     control,
//   } = useForm();

//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [products, setProducts] = useState([]);

//   // Fetch Products by Category
//   const fetchProductsByCategory = async (category) => {
//     if (!category) {
//       setProducts([]); // Reset if no category selected
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const response = await axios.get(
//         `/product/getProductByCategory/${category}`
//       );
//       setProducts(response.data.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setProducts([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle Form Submission
//   const submitHandler = async (data) => {
//     setIsLoading(true);
//     data.userId = localStorage.getItem("id");

//     try {
//       const res = await axios.post("rating/rating", data);

//       if (res.status === 201) {
//         toast.success("Review and Rating added successfully!", {
//           theme: "dark",
//         });
//         setTimeout(() => navigate("/user/userprofile"), 2000);
//       } else {
//         toast.error("Review and Rating not added!");
//       }
//     } catch (error) {
//       toast.error("An error occurred while submitting the review and rating!");
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Validation Rules
//   const ValidationSchema = {
//     commentValidator: {
//       required: { value: true, message: "Comment is required *" },
//     },
//     ratingValidator: {
//       required: { value: true, message: "Product Rating is required *" },
//       min: { value: 1, message: "Minimum Rating is 1" },
//       max: { value: 5, message: "Maximum Rating is 5" },
//     },
//     review_dateValidator: {
//       required: { value: true, message: "Review Date is required *" },
//     },
//     categoryValidator: {
//       required: { value: true, message: "Product category is required *" },
//     },
//     productValidator: {
//       required: { value: true, message: "Product selection is required *" },
//     },
//   };

//   return (
//     <div>
//       <ToastContainer
//         position="top-left"
//         autoClose={5000}
//         theme="dark"
//         transition={Bounce}
//       />
//       {isLoading && <CustomLoader />}

//       <Form onSubmit={handleSubmit(submitHandler)}>
//         <Container
//           fluid
//           className="d-flex align-items-center justify-content-center min-vh-100"
//           style={{
//             backgroundImage:
//               "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Card
//             className="m-3 p-4 shadow-lg"
//             style={{ maxWidth: "600px", width: "100%" }}
//           >
//             <Card.Body className="px-4">
//               <h2 className="text-uppercase text-center mb-4">
//                 Add Review and Ratings
//               </h2>

//               {/* Category Selection */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Product Category</Form.Label>
//                 <Form.Select
//                   className="form-control-lg"
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
//                   <option value="Beauty & Personal Care">
//                     Beauty & Personal Care
//                   </option>
//                   <option value="Home & Kitchen">Home & Kitchen</option>
//                   <option value="Grocery & Food">Grocery & Food</option>
//                   <option value="Automobiles & Accessories">
//                     Automobiles & Accessories
//                   </option>
//                   <option value="Books & Stationery">Books & Stationery</option>
//                   <option value="Sports & Fitness">Sports & Fitness</option>
//                   <option value="Toys & Baby Products">
//                     Toys & Baby Products
//                   </option>
//                   <option value="Healthcare & Medicine">
//                     Healthcare & Medicine
//                   </option>
//                   <option value="Services">Services</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.category?.message}</span>
//               </Form.Group>

//               {/* Product Selection */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Product</Form.Label>
//                 <Form.Select
//                   className="form-control-lg"
//                   {...register("productId", ValidationSchema.productValidator)}
//                 >
//                   <option value="">Select Product</option>
//                   {products.map((product) => (
//                     <option key={product._id} value={product._id}>
//                       {product.name}
//                     </option>
//                   ))}
//                 </Form.Select>
//                 <span className="text-danger">{errors.productId?.message}</span>
//               </Form.Group>

//               {/* Review and Comments */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Review and Comments</Form.Label>
//                 <Form.Control
//                   type="text"
//                   className="form-control-lg"
//                   style={{ fontSize: "18px", padding: "10px" }}
//                   {...register("comment", ValidationSchema.commentValidator)}
//                 />
//                 <Form.Text className="text-danger">
//                   {errors.comment?.message}
//                 </Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Rating</Form.Label>
//                 <Controller
//                   name="rating"
//                   control={control}
//                   rules={ValidationSchema.ratingValidator}
//                   render={({ field: { onChange, value } }) => (
//                     <div style={{ fontSize: "20px", padding: "5px" }}>
//                       <StarRatings
//                         rating={value || 0}
//                         starRatedColor="#ffd700"
//                         changeRating={(newRating) => onChange(newRating || 0)}
//                         numberOfStars={5}
//                         name="rating"
//                         starDimension="30px"
//                         starSpacing="5px"
//                         starHoverColor="#ffd700"
//                         starEmptyColor="#d3d3d3"
//                         allowHalf={true} // ✅ Enables half-star ratings!
//                       />
//                     </div>
//                   )}
//                 />
//                 <Form.Text className="text-danger">
//                   {errors.rating?.message}
//                 </Form.Text>
//               </Form.Group>

//               {/* <Form.Group className="mb-3">
//                                 <Form.Label className="fw-bold">Rating</Form.Label>
//                                 <ReactStars
//                                     count={5}
//                                     value={rating}
//                                     onChange={(newRating) => {
//                                         setRating(newRating);
//                                         if (newRating > 0) clearErrors("rating");
//                                     }}
//                                     size={40}
//                                     activeColor="#ffd700"
//                                 />
//                                 <Form.Text className="text-danger">{errors.rating?.message}</Form.Text>
//                             </Form.Group> */}

//               {/* Review Date */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-bold">Review Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   className="form-control-lg"
//                   {...register(
//                     "review_date",
//                     ValidationSchema.review_dateValidator
//                   )}
//                 />
//                 <Form.Text className="text-danger">
//                   {errors.review_date?.message}
//                 </Form.Text>
//               </Form.Group>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 className="mt-4 w-100"
//                 variant="primary"
//                 size="lg"
//               >
//                 Submit
//               </Button>
//             </Card.Body>
//           </Card>
//         </Container>
//       </Form>
//     </div>
//   );
// };


import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { CustomLoader } from "../CustomLoader";
import ReactStars from "react-stars";
import StarRatings from "react-star-ratings";

import "../../assets/addreview.css";

export const AddReviewAndRatings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProductsByCategory = async (category) => {
    if (!category) return setProducts([]);
    try {
      setIsLoading(true);
      const res = await axios.get(`/product/getProductByCategory/${category}`);
      setProducts(res.data.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const submitHandler = async (data) => {
    setIsLoading(true);
    data.userId = localStorage.getItem("id");

    try {
      const res = await axios.post("rating/rating", data);
      if (res.status === 201) {
        toast.success("Review and Rating added successfully!", { theme: "dark" });
        setTimeout(() => navigate("/user/viewmyreviewandratings"), 2000);
      } else {
        toast.error("Review and Rating not added!");
      }
    } catch (err) {
      toast.error("Error submitting review and rating!");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const ValidationSchema = {
    commentValidator: { required: "Comment is required *" },
    ratingValidator: {
      required: "Product Rating is required *",
      min: { value: 1, message: "Minimum Rating is 1" },
      max: { value: 5, message: "Maximum Rating is 5" },
    },
    review_dateValidator: { required: "Review Date is required *" },
    categoryValidator: { required: "Product category is required *" },
    productValidator: { required: "Product selection is required *" },
  };

  return (
    <div className="review-page-wrapper">
      <ToastContainer position="top-left" autoClose={5000} theme="dark" transition={Bounce} />
      {isLoading && <CustomLoader />}

      <Container className="review-form-container " >
        <Card className="review-card p-4 shadow-lg">
          <Card.Body>
            <h2 className="text-center mb-4">Add Review and Ratings</h2>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <Row>
                <Col xs={12} className="mb-3">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Select
                    {...register("category", ValidationSchema.categoryValidator)}
                    onChange={(e) => fetchProductsByCategory(e.target.value)}
                  >
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
                </Col>

                <Col xs={12} className="mb-3">
                  <Form.Label>Product</Form.Label>
                  <Form.Select
                    {...register("productId", ValidationSchema.productValidator)}
                  >
                    <option value="">Select Product</option>
                    {products.map((product) => (
                      <option key={product._id} value={product._id}>
                        {product.name}
                      </option>
                    ))}
                  </Form.Select>
                  <span className="text-danger">{errors.productId?.message}</span>
                </Col>

                <Col xs={12} className="mb-3">
                  <Form.Label>Review and Comments</Form.Label>
                  <Form.Control
                    type="textarea"
                    {...register("comment", ValidationSchema.commentValidator)}
                  />
                  <span className="text-danger">{errors.comment?.message}</span>
                </Col>

                <Col xs={12} className="mb-3 ">
                  <Form.Label style={{marginRight:"1rem"}}>Rating</Form.Label>
                  <Controller
                    name="rating"
                    control={control}
                    rules={ValidationSchema.ratingValidator}
                    render={({ field: { onChange, value } }) => (
                      <StarRatings
                        rating={value || 0}
                        starRatedColor="#ffd700"
                        changeRating={(val) => onChange(val || 0)}
                        numberOfStars={5}
                        name="rating"
                        starDimension="30px"
                        starSpacing="5px"
                        starHoverColor="#ffd700"
                        starEmptyColor="#d3d3d3"
                      />
                    )}
                  />
                  <span className="text-danger">{errors.rating?.message}</span>
                </Col>

                <Col xs={12} className="mb-3">
                  <Form.Label>Review Date</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("review_date", ValidationSchema.review_dateValidator)}
                  />
                  <span className="text-danger">{errors.review_date?.message}</span>
                </Col>

                <Col xs={12} className="mt-3">
                  <Button type="submit" className="w-100" variant="primary" size="lg">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
            
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
