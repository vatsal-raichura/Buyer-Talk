// // // import axios from "axios";
// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import "../../assets/products.css"; // Importing the CSS file

// // // export const ProductDetails2 = () => {
// // //   const { productId } = useParams();
// // //   const [product, setProduct] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   useEffect(() => {
// // //     const fetchProductDetails = async () => {
// // //       setIsLoading(true);
// // //       try {
// // //         const res = await axios.get(`/product/getProductById/${productId}`);
// // //         setProduct(res.data.data);
// // //       } catch (error) {
// // //         console.error("Error fetching product details:", error);
// // //       }
// // //       setIsLoading(false);
// // //     };

// // //     fetchProductDetails();
// // //   }, [productId]);

// // //   if (isLoading) return <p className="loading-text">Loading...</p>;
// // //   if (!product) return <p className="error-text">Product not found.</p>;

// // //   return (
// // //     <div className="product-details-container">
// // //       <div className="product-card">
// // //         <h2 className="product-title">{product.name}</h2>
// // //         <img className="product-image" src={product.productURL} alt={product.name} />
// // //         <div className="product-info">
// // //           <p><b>Product Description:</b> {product.description}</p>
// // //           <p><b>Product Brand:</b> {product.brand}</p>
// // //           <p><b>Product Price:</b> <span className="product-price">₹{product.price}</span></p>
// // //           <p><b>Product Category:</b> {product?.category || "No Category"}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import "../../assets/products.css";

// // export const ProductDetails2 = () => {
// //   const { productId } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const [reviews, setReviews] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProductDetails = async () => {
// //       try {
// //         const res = await axios.get(`/product/getProductById/${productId}`);
// //         setProduct(res.data.data);
// //         console.log(res.data.data)
// //         setReviews(res.data.data.reviews || []);
// //       } catch (error) {
// //         console.error("Error fetching product details:", error);
// //         setError("Failed to load product details. Please try again.");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchProductDetails();

// //   }, [productId]);

// //   if (isLoading) return <p className="loading-text">Loading product details...</p>;
// //   if (error) return <p className="error-text">{error}</p>;
// //   if (!product) return <p className="error-text">Product not found.</p>;

// //   return (
// //     <div className="product-details-container">
// //       <div className="product-card">
// //         <h2 className="product-title">{product?.name || "No Name Available"}</h2>
// //         <img className="product-image" src={product?.productURL || "default-image.jpg"} alt={product?.name || "Product"} />
// //         <div className="product-info">
// //           <p><b>Description:</b> {product?.description || "No description available."}</p>
// //           <p><b>Brand:</b> {product?.brand || "Unknown Brand"}</p>
// //           <p><b>Price:</b> <span className="product-price">₹{product?.price || "N/A"}</span></p>
// //           <p><b>Category:</b> {product?.category || "No Category Assigned"}</p>
// //           <p><b>Rating:</b> ⭐ {product?.rating || "Not Rated"} ({product?.ratingCount || 0} Reviews)</p>
// //           <p><b>Review:</b>  {product?.review_comment || "Not Comment"} </p>
// //         </div>
// //       </div>

// //       </div>

// //   );
// // };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../../assets/products.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]); // Store reviews array
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         setProduct(res.data.data);
//         setReviews(res.data.data.reviews || []); // ✅ Store reviews in state
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   if (isLoading) return <p className="loading-text">Loading product details...</p>;
//   if (error) return <p className="error-text">{error}</p>;
//   if (!product) return <p className="error-text">Product not found.</p>;

//   return (
//     <div className="product-details-container">
//       <div className="product-card">
//         <h2 className="product-title">{product?.name || "No Name Available"}</h2>
//         <img className="product-image" src={product?.productURL || "default-image.jpg"} alt={product?.name || "Product"} />
//         <div className="product-info">
//           <p><b>Description:</b> {product?.description || "No description available."}</p>
//           <p><b>Brand:</b> {product?.brand || "Unknown Brand"}</p>
//           <p><b>Price:</b> <span className="product-price">₹{product?.price || "N/A"}</span></p>
//           <p><b>Category:</b> {product?.category || "No Category Assigned"}</p>
//           <p><b>Rating:</b> ⭐ {product?.rating || "Not Rated"} ({product?.ratingCount || 0} Reviews)</p>
//         </div>
//       </div>

//       {/* ✅ Reviews Section */}
//       <div className="reviews-section">
//         <h3>Customer Reviews ({reviews.length})</h3>
//         {reviews.length > 0 ? (
//           <ul className="reviews-list">
//             {reviews.map((review) => (
//               <li key={review._id} className="review-item">
//                 <p><strong>{review?.name || "Unknown User"}</strong> ({review?.email || "No Email"})</p>

//                 <p>⭐ {review.rating} / 5</p>
//                 <p>{review.comment}</p>
//                 <p className="review-date">Reviewed on: {new Date(review.review_date).toLocaleDateString()}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No reviews available for this product.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setFilteredReviews(productData.reviews || []);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);

//     if (selected === "All") {
//       setFilteredReviews(reviews);
//     } else {
//       const filtered = reviews.filter(
//         (review) => String(review.rating) === selected
//       );
//       setFilteredReviews(filtered);
//     }
//   };

//   const ratedReviews = reviews.filter(r => r.rating !== undefined && r.rating !== null);

//   // Calculate average rating
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   return (
//     <Container className="mt-4">
//       {/* Product Card */}
//       <Card className="shadow mb-4 " >
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img style={{marginRight:"100px"}}
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-300"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{fontSize:"3rem", width:"100%"}} as="h1">{product?.name || "No Name"}</Card.Title>
//               <Card.Text className="fs-5">
//                 <strong>Description:</strong> {product?.description}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Brand:</strong> {product?.brand}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Price:</strong> ₹{product?.price}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Category:</strong> {product?.category || "Uncategorized"}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       {/* Reviews Section */}
//       <Card className="shadow-sm">
//         <Card.Body>
//           <Row className="align-items-center mb-3">
//             <Col md={6}>
//               <h5 className="mb-0">
//                 Customer Reviews ({filteredReviews.length})
//               </h5>
//             </Col>
//             <Col md={6}>
//               <Form.Select
//                 aria-label="Filter by rating"
//                 value={selectedRating}
//                 onChange={handleRatingChange}
//               >
//                 <option value="All">All Ratings</option>
//                 <option value="5">★★★★★   5 Stars</option>
//                 <option value="4">★★★★   4 Stars</option>
//                 <option value="3">★★★   3 Stars</option>
//                 <option value="2">★★   2 Stars</option>
//                 <option value="1">★   1 Star</option>
//               </Form.Select>
//             </Col>
//           </Row>

//           {filteredReviews.length > 0 ? (
//             filteredReviews.map((review) => (
//               <Card className="mb-3" key={review._id}>
//                 <Card.Body>
//                   <Card.Title className="d-flex justify-content-between align-items-center">
//                     <span>{review?.name || "Anonymous"}</span>
//                     <span className="text-warning" style={{fontsize:"1.1rem", margin:" 0rem 1.5rem"}}>
//                       ⭐ {review.rating} / 5
//                     </span >
//                   </Card.Title>

//                   <Card.Text style={{ fontSize: "1.1rem",marginLeft:"  15rem " }}>{review.comment}</Card.Text>
//                   <small className="text-muted d-block mt-2">
//                     Reviewed on{" "}
//                     {new Date(review.review_date).toLocaleDateString()}
//                   </small>
//                 </Card.Body>
//               </Card>
//             ))
//           ) : (
//             <p className="text-muted">No reviews for the selected rating.</p>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [viewOption, setViewOption] = useState("Ratings");
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setComplaints(productData.complaints || []);
//         setFilteredReviews(productData.reviews || []);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleViewChange = (e) => {
//     setViewOption(e.target.value);
//   };

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);
//     setFilteredReviews(
//       selected === "All"
//         ? reviews
//         : reviews.filter((review) => String(review.rating) === selected)
//     );
//   };

//   const ratedReviews = reviews.filter((r) => r.rating != null);
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   return (
//     <Container className="mt-4">
//       {/* Product Card */}
//       <Card className="shadow mb-4">
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img
//               style={{ marginRight: "100px" }}
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-300"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{fontSize:"3rem", width:"100%"}}>{product?.name || "No Name"}</Card.Title>
//               <Card.Text className="fs-5">
//                 <strong>Description:</strong> {product?.description}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Brand:</strong> {product?.brand}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Price:</strong> ₹{product?.price}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Category:</strong> {product?.category || "Uncategorized"}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       {/* View Option Dropdown */}
//       <Row className="mb-3">
//         <Col md={6}>
//           <Form.Select value={viewOption} onChange={handleViewChange}>
//             <option value="Ratings">Ratings</option>
//             <option value="Complaints">Complaints</option>
//           </Form.Select>
//         </Col>

//         {/* Show rating filter only when Ratings is selected */}
//         {viewOption === "Ratings" && (
//           <Col md={6}>
//             <Form.Select value={selectedRating} onChange={handleRatingChange}>
//               <option value="All">All Ratings</option>
//               <option value="5">★★★★★ 5 Stars</option>
//               <option value="4">★★★★ 4 Stars</option>
//               <option value="3">★★★ 3 Stars</option>
//               <option value="2">★★ 2 Stars</option>
//               <option value="1">★ 1 Star</option>
//             </Form.Select>
//           </Col>
//         )}
//       </Row>

//       {/* Ratings Section */}
//       {viewOption === "Ratings" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5 className="mb-3">Customer Reviews ({filteredReviews.length})</h5>
//             {filteredReviews.length > 0 ? (
//               filteredReviews.map((review) => (
//                 <Card className="mb-3" key={review._id}>
//                   <Card.Body>
//                     <Card.Title className="d-flex justify-content-between align-items-center">
//                       <span>{review?.name || "Anonymous"}</span>
//                       <span className="text-warning" style={{fontsize:"1.1rem", margin:" 0rem 1.5rem"}}>⭐ {review.rating} / 5</span>
//                     </Card.Title>
//                     <Card.Text style={{ fontSize: "1.1rem",marginLeft:"  15rem " }}>{review.comment}</Card.Text>
//                     <small className="text-muted">
//                       Reviewed on {new Date(review.review_date).toLocaleDateString()}
//                     </small>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p className="text-muted">No reviews for the selected rating.</p>
//             )}
//           </Card.Body>
//         </Card>
//       )}

//       {/* Complaints Section */}
//       {viewOption === "Complaints" && (
//         <Card className="shadow-sm">
//           <Card.Body>
//             <h5 className="mb-3">Customer Complaints ({complaints.length})</h5>
//             {complaints.length > 0 ? (
//               complaints.map((complaint) => (
//                 <Card className="mb-3" key={complaint._id}>
//                   <Card.Body>
//                     <Card.Title className="fs-5" style={{marginRight:"2rem"}}>
//                       <strong style={{marginRight:"2rem"}}>{complaint?.name || "User"}</strong>{" "}
//                       <strong>Status:</strong> {complaint.status || "N/A"}

//                     </Card.Title>

//                     <Card.Text className="fs-5">{complaint.description || "No complaint text provided."}</Card.Text>

//                     <span className="text-muted" style={{ fontSize: "1rem" }}>
//                        compliant on {new Date(complaint.fileddate).toLocaleDateString()}
//                     </span>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p className="text-muted">No complaints have been filed for this product.</p>
//             )}
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [viewOption, setViewOption] = useState("Ratings");
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [complaintStatusFilter, setComplaintStatusFilter] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setComplaints(productData.complaints || []);
//         setFilteredReviews(productData.reviews || []);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleViewChange = (e) => {
//     setViewOption(e.target.value);
//   };

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);
//     setFilteredReviews(
//       selected === "All"
//         ? reviews
//         : reviews.filter((review) => String(review.rating) === selected)
//     );
//   };

//   const handleComplaintStatusChange = (e) => {
//     setComplaintStatusFilter(e.target.value);
//   };

//   const ratedReviews = reviews.filter((r) => r.rating != null);
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   const filteredComplaints =
//     complaintStatusFilter === "All"
//       ? complaints
//       : complaints.filter(
//           (complaint) =>
//             complaint.status?.toLowerCase() ===
//             complaintStatusFilter.toLowerCase()
//         );

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   return (
//     <Container className="mt-4">
//       {/* Product Card */}
//       <Card className="shadow mb-4">
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img
//               style={{ marginRight: "100px" }}
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-300"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "3rem", width: "100%" }}>
//                 {product?.name || "No Name"}
//               </Card.Title>
//               <Card.Text className="fs-5">
//                 <strong>Description:</strong> {product?.description}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Brand:</strong> {product?.brand}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Price:</strong> ₹{product?.price}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Category:</strong> {product?.category || "Uncategorized"}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       {/* View Option Dropdowns */}
//       <Row className="mb-3">
//         <Col md={6}>
//           <Form.Select value={viewOption} onChange={handleViewChange}>
//             <option value="Ratings">Ratings</option>
//             <option value="Complaints">Complaints</option>
//           </Form.Select>
//         </Col>

//         {viewOption === "Ratings" && (
//           <Col md={6}>
//             <Form.Select value={selectedRating} onChange={handleRatingChange}>
//               <option value="All">All Ratings</option>
//               <option value="5">★★★★★ 5 Stars</option>
//               <option value="4">★★★★ 4 Stars</option>
//               <option value="3">★★★ 3 Stars</option>
//               <option value="2">★★ 2 Stars</option>
//               <option value="1">★ 1 Star</option>
//             </Form.Select>
//           </Col>
//         )}

//         {viewOption === "Complaints" && (
//           <Col md={6}>
//             <Form.Select
//               value={complaintStatusFilter}
//               onChange={handleComplaintStatusChange}
//             >
//               <option value="All">All Complaints</option>
//               <option value="Open">Open</option>
//               <option value="Resolved">Resolved</option>
//               <option value="Escalated">Escalated</option>
//             </Form.Select>
//           </Col>
//         )}
//       </Row>

//       {/* Ratings Section */}
//       {viewOption === "Ratings" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5 className="mb-3">Customer Reviews ({filteredReviews.length})</h5>
//             {filteredReviews.length > 0 ? (
//               filteredReviews.map((review) => (
//                 <Card className="mb-3" key={review._id}>
//                   <Card.Body>
//                     <Card.Title className="d-flex justify-content-between align-items-center">
//                       <span>{review?.name || "Anonymous"}</span>
//                       <span className="text-warning" style={{ fontSize: "1.1rem", margin: "0rem 1.5rem" }}>
//                         ⭐ {review.rating} / 5
//                       </span>
//                     </Card.Title>
//                     <Card.Text style={{ fontSize: "1.1rem", marginLeft: "15rem" }}>
//                       {review.comment}
//                     </Card.Text>
//                     <small className="text-muted">
//                       Reviewed on {new Date(review.review_date).toLocaleDateString()}
//                     </small>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p className="text-muted">No reviews for the selected rating.</p>
//             )}
//           </Card.Body>
//         </Card>
//       )}

//       {/* Complaints Section */}
//       {viewOption === "Complaints" && (
//         <Card className="shadow-sm">
//           <Card.Body>
//             <h5 className="mb-3">Customer Complaints ({filteredComplaints.length})</h5>
//             {filteredComplaints.length > 0 ? (
//               filteredComplaints.map((complaint) => (
//                 <Card className="mb-3" key={complaint._id}>
//                   <Card.Body>
//                     <Card.Title className="fs-5" style={{ marginRight: "2rem" }}>
//                       <strong style={{ marginRight: "2rem" }}>
//                         {complaint?.name || "User"}
//                       </strong>
//                       <strong>Status:</strong> {complaint.status || "N/A"}
//                     </Card.Title>
//                     <Card.Text className="fs-5">
//                       {complaint.description || "No complaint text provided."}
//                     </Card.Text>
//                     <span className="text-muted" style={{ fontSize: "1rem" }}>
//                       Filed on {new Date(complaint.fileddate).toLocaleDateString()}
//                     </span>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p className="text-muted">No complaints found for the selected status.</p>
//             )}
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
//   Button,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [filteredComplaints, setFilteredComplaints] = useState([]);
//   const [viewOption, setViewOption] = useState("Ratings");
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [selectedStatus, setSelectedStatus] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAllReviews, setShowAllReviews] = useState(false);
//   const [showAllComplaints, setShowAllComplaints] = useState(false);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setComplaints(productData.complaints || []);
//         setFilteredReviews(productData.reviews || []);
//         setFilteredComplaints(productData.complaints || []);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleViewChange = (e) => {
//     setViewOption(e.target.value);
//   };

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);
//     setFilteredReviews(
//       selected === "All"
//         ? reviews
//         : reviews.filter((review) => String(review.rating) === selected)
//     );
//     setShowAllReviews(false);
//   };

//   const handleStatusChange = (e) => {
//     const selected = e.target.value;
//     setSelectedStatus(selected);
//     setFilteredComplaints(
//       selected === "All"
//         ? complaints
//         : complaints.filter(
//             (complaint) =>
//               complaint.status &&
//               complaint.status.toLowerCase() === selected.toLowerCase()
//           )
//     );
//     setShowAllComplaints(false);
//   };

//   const ratedReviews = reviews.filter((r) => r.rating != null);
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   const sortedReviews = [...filteredReviews].sort(
//     (a, b) => new Date(b.review_date) - new Date(a.review_date)
//   );
//   const sortedComplaints = [...filteredComplaints].sort(
//     (a, b) => new Date(b.fileddate) - new Date(a.fileddate)
//   );

//   const reviewsToDisplay = showAllReviews ? sortedReviews : sortedReviews.slice(0, 3);
//   const complaintsToDisplay = showAllComplaints
//     ? sortedComplaints
//     : sortedComplaints.slice(0, 3);

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   return (
//     <Container className="mt-4">
//       {/* Product Card */}
//       <Card className="shadow mb-4">
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-300"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "2.5rem" }}>
//                 {product?.name || "No Name"}
//               </Card.Title>
//               <Card.Text className="fs-5">
//                 <strong>Description:</strong> {product?.description}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Brand:</strong> {product?.brand}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Price:</strong> ₹{product?.price}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Category:</strong> {product?.category || "Uncategorized"}
//               </Card.Text>
//               <Card.Text className="fs-5">
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       {/* View Option Dropdowns */}
//       <Row className="mb-3">
//         <Col md={6}>
//           <Form.Select value={viewOption} onChange={handleViewChange}>
//             <option value="Reviews">Reviews</option>
//             <option value="Complaints">Complaints</option>
//           </Form.Select>
//         </Col>

//         {viewOption === "Ratings" && (
//           <Col md={6}>
//             <Form.Select value={selectedRating} onChange={handleRatingChange}>
//               <option value="All">All Ratings</option>
//               <option value="5">★★★★★ 5 Stars</option>
//               <option value="4">★★★★ 4 Stars</option>
//               <option value="3">★★★ 3 Stars</option>
//               <option value="2">★★ 2 Stars</option>
//               <option value="1">★ 1 Star</option>
//             </Form.Select>
//           </Col>
//         )}

//         {viewOption === "Complaints" && (
//           <Col md={6}>
//             <Form.Select value={selectedStatus} onChange={handleStatusChange}>
//               <option value="All">All Complaints</option>
//               <option value="Open">Open</option>
//               <option value="Resolved">Resolved</option>
//               <option value="Escalated">Escalated</option>
//             </Form.Select>
//           </Col>
//         )}
//       </Row>

//       {/* Ratings Section */}
//       {viewOption === "Ratings" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5 className="mb-3">Customer Reviews ({filteredReviews.length})</h5>
//             {reviewsToDisplay.length > 0 ? (
//               reviewsToDisplay.map((review) => (
//                 <Card className="mb-3" key={review._id}>
//                   <Card.Body>
//                     <Card.Title className="d-flex justify-content-between align-items-center">
//                       <span>{review?.name || "Anonymous"}</span>
//                       <span className="text-warning" style={{ fontSize: "1.1rem" }}>
//                         ⭐ {review.rating} / 5
//                       </span>
//                     </Card.Title>
//                     <Card.Text>{review.comment}</Card.Text>
//                     <small className="text-muted">
//                       Reviewed on {new Date(review.review_date).toLocaleDateString()}
//                     </small>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p className="text-muted">No reviews for the selected rating.</p>
//             )}
//             {filteredReviews.length > 3 && (
//               <div className="text-center mt-2">
//                 <Button
//                   variant="outline-primary"
//                   onClick={() => setShowAllReviews(!showAllReviews)}
//                 >
//                   {showAllReviews ? "View Less" : "View More"}
//                 </Button>
//               </div>
//             )}
//           </Card.Body>
//         </Card>
//       )}

//       {/* Complaints Section */}
//       {viewOption === "Complaints" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5 className="mb-3">Customer Complaints ({filteredComplaints.length})</h5>
//             {complaintsToDisplay.length > 0 ? (
//               complaintsToDisplay.map((complaint) => (
//                 <Card className="mb-3" key={complaint._id}>
//                   <Card.Body>
//                     <Card.Title className="fs-5">
//                       <strong>{complaint?.name || "User"}</strong>{" "}
//                       <span className="ms-3">
//                         <strong>Status:</strong> {complaint.status || "N/A"}
//                       </span>
//                     </Card.Title>
//                     <Card.Text>{complaint.description}</Card.Text>
//                     <span className="text-muted" style={{ fontSize: "1rem" }}>
//                       Filed on {new Date(complaint.fileddate).toLocaleDateString()}
//                     </span>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p className="text-muted">No complaints found for the selected status.</p>
//             )}
//             {filteredComplaints.length > 3 && (
//               <div className="text-center mt-2">
//                 <Button
//                   variant="outline-primary"
//                   onClick={() => setShowAllComplaints(!showAllComplaints)}
//                 >
//                   {showAllComplaints ? "View Less" : "View More"}
//                 </Button>
//               </div>
//             )}
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
//   Button,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [viewOption, setViewOption] = useState("Ratings");
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [expanded, setExpanded] = useState(false);
//   const [expandedComplaints, setExpandedComplaints] = useState(false);
//   const [resolving, setResolving] = useState({});
//   const [responseMessages, setResponseMessages] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setComplaints(productData.complaints || []);
//         setFilteredReviews(productData.reviews || []);
//       } catch (error) {
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleViewChange = (e) => setViewOption(e.target.value);

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);
//     setFilteredReviews(
//       selected === "All"
//         ? reviews
//         : reviews.filter((review) => String(review.rating) === selected)
//     );
//   };

//   const ratedReviews = reviews.filter((r) => r.rating != null);
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   const statusStyle = (status) => {
//     switch (status.toLowerCase()) {
//       case "open":
//         return { color: "#ffc107", icon: "🟡" };
//       case "escalated":
//         return { color: "#dc3545", icon: "🔴" };
//       case "resolved":
//         return { color: "#198754", icon: "✅" };
//       default:
//         return { color: "gray", icon: "❔" };
//     }
//   };

//   const handleResolve = async (id) => {
//     const message = responseMessages[id];
//     if (!message) return;

//     try {
//       await axios.put(`/complaint/update/${id}`, {
//         status: "resolved",
//         resolutionMessage: message,
//       });

//       setComplaints((prev) =>
//         prev.map((c) =>
//           c._id === id
//             ? { ...c, status: "resolved", resolutionMessage: message }
//             : c
//         )
//       );
//       setResolving((prev) => ({ ...prev, [id]: false }));
//       setResponseMessages((prev) => ({ ...prev, [id]: "" }));
//     } catch (err) {
//       console.error("Error resolving complaint:", err);
//     }
//   };

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   return (
//     <Container className="mt-4">
//       {/* Product Card */}
//       <Card className="shadow mb-4">
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-100"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "2rem" }}>{product?.name}</Card.Title>
//               <Card.Text><strong>Description:</strong> {product?.description}</Card.Text>
//               <Card.Text><strong>Brand:</strong> {product?.brand}</Card.Text>
//               <Card.Text><strong>Price:</strong> ₹{product?.price}</Card.Text>
//               <Card.Text><strong>Category:</strong> {product?.category}</Card.Text>
//               <Card.Text>
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       {/* Toggle View Option */}
//       <Row className="mb-3">
//         <Col md={6}>
//           <Form.Select value={viewOption} onChange={handleViewChange}>
//             <option value="Ratings">Ratings</option>
//             <option value="Complaints">Complaints</option>
//           </Form.Select>
//         </Col>

//         {viewOption === "Ratings" && (
//           <Col md={6}>
//             <Form.Select value={selectedRating} onChange={handleRatingChange}>
//               <option value="All">All Ratings</option>
//               {[5, 4, 3, 2, 1].map((r) => (
//                 <option key={r} value={r}>
//                   {Array(r).fill("★").join("")} {r} Stars
//                 </option>
//               ))}
//             </Form.Select>
//           </Col>
//         )}
//       </Row>

//       {/* Ratings Section */}
//       {viewOption === "Ratings" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5>Customer Reviews</h5>
//             {(expanded ? filteredReviews : filteredReviews.slice(0, 3)).map((review) => (
//               <Card key={review._id} className="mb-2">
//                 <Card.Body>
//                   <Card.Title className="d-flex justify-content-between">
//                     <span>{review.name || "Anonymous"}</span>
//                     <span className="text-warning">⭐ {review.rating} / 5</span>
//                   </Card.Title>
//                   <Card.Text>{review.comment}</Card.Text>
//                   <small className="text-muted">
//                     Reviewed on {new Date(review.review_date).toLocaleDateString()}
//                   </small>
//                 </Card.Body>
//               </Card>
//             ))}
//             {filteredReviews.length > 3 && (
//               <Button
//                 variant="link"
//                 onClick={() => setExpanded(!expanded)}
//                 className="mt-2"
//               >
//                 {expanded ? "Show Less" : "View More"}
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       )}

//       {/* Complaints Section */}
//       {viewOption === "Complaints" && (
//         <Card className="shadow-sm">
//           <Card.Body>
//             <h5>Customer Complaints</h5>
//             {(expandedComplaints ? complaints : complaints.slice(0, 3)).map((complaint) => {
//               const { color, icon } = statusStyle(complaint.status || "");
//               return (
//                 <Card key={complaint._id} className="mb-3 border" style={{ borderColor: color }}>
//                   <Card.Body>
//                     <Card.Title>
//                       <span style={{ color, fontWeight: "bold" }}>{icon} {complaint.status}</span>
//                       <div><strong>User:</strong> {complaint?.userId?.firstname || "User"}</div>
//                     </Card.Title>
//                     <Card.Text>{complaint.description}</Card.Text>
//                     <small className="text-muted">
//                       Filed on {new Date(complaint.fileddate).toLocaleDateString()}
//                     </small>

//                     {["open", "escalated"].includes(complaint.status?.toLowerCase()) && (
//                       <>
//                         <Form.Control
//                           type="text"
//                           placeholder="Response message..."
//                           className="mt-2"
//                           value={responseMessages[complaint._id] || ""}
//                           onChange={(e) =>
//                             setResponseMessages((prev) => ({
//                               ...prev,
//                               [complaint._id]: e.target.value,
//                             }))
//                           }
//                         />
//                         <Button
//                           variant="success"
//                           className="mt-2"
//                           onClick={() => handleResolve(complaint._id)}
//                         >
//                           Resolve
//                         </Button>
//                       </>
//                     )}

//                     {complaint.status === "resolved" && complaint.resolutionMessage && (
//                       <Alert variant="success" className="mt-2">
//                         <strong>Response:</strong> {complaint.resolutionMessage}
//                       </Alert>
//                     )}
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//             {complaints.length > 3 && (
//               <Button
//                 variant="link"
//                 onClick={() => setExpandedComplaints(!expandedComplaints)}
//               >
//                 {expandedComplaints ? "Show Less" : "View More"}
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
//   Button,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [viewOption, setViewOption] = useState("Ratings");
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [selectedComplaintStatus, setSelectedComplaintStatus] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [expanded, setExpanded] = useState(false);
//   const [expandedComplaints, setExpandedComplaints] = useState(false);
//   const [resolving, setResolving] = useState({});
//   const [responseMessages, setResponseMessages] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setComplaints(productData.complaints || []);
//         setFilteredReviews(productData.reviews || []);
//       } catch (error) {
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleViewChange = (e) => setViewOption(e.target.value);

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);
//     setFilteredReviews(
//       selected === "All"
//         ? reviews
//         : reviews.filter((review) => String(review.rating) === selected)
//     );
//   };

//   const ratedReviews = reviews.filter((r) => r.rating != null);
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   const statusStyle = (status) => {
//     switch (status.toLowerCase()) {
//       case "open":
//         return { color: "#ffc107", icon: "🟡" };
//       case "escalated":
//         return { color: "#dc3545", icon: "🔴" };
//       case "resolved":
//         return { color: "#198754", icon: "✅" };
//       default:
//         return { color: "gray", icon: "❔" };
//     }
//   };

//   const handleResolve = async (id) => {
//     const message = responseMessages[id];
//     if (!message) return;

//     try {
//       await axios.put(`/complaint/update/${id}`, {
//         status: "resolved",
//         resolutionMessage: message,
//       });

//       setComplaints((prev) =>
//         prev.map((c) =>
//           c._id === id
//             ? { ...c, status: "resolved", resolutionMessage: message }
//             : c
//         )
//       );
//       setResolving((prev) => ({ ...prev, [id]: false }));
//       setResponseMessages((prev) => ({ ...prev, [id]: "" }));
//     } catch (err) {
//       console.error("Error resolving complaint:", err);
//     }
//   };

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   const filteredComplaints =
//     selectedComplaintStatus === "All"
//       ? complaints
//       : complaints.filter(
//           (c) => c.status?.toLowerCase() === selectedComplaintStatus.toLowerCase()
//         );

//   return (
//     <Container className="mt-4">
//       {/* Product Card */}
//       <Card className="shadow mb-4">
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-100"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "2rem" }}>{product?.name}</Card.Title>
//               <Card.Text><strong>Description:</strong> {product?.description}</Card.Text>
//               <Card.Text><strong>Brand:</strong> {product?.brand}</Card.Text>
//               <Card.Text><strong>Price:</strong> ₹{product?.price}</Card.Text>
//               <Card.Text><strong>Category:</strong> {product?.category}</Card.Text>
//               <Card.Text>
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       {/* Toggle View Option */}
//       <Row className="mb-3">
//         <Col md={6}>
//           <Form.Select value={viewOption} onChange={handleViewChange}>
//             <option value="Ratings">Ratings</option>
//             <option value="Complaints">Complaints</option>
//           </Form.Select>
//         </Col>

//         {viewOption === "Ratings" && (
//           <Col md={6}>
//             <Form.Select value={selectedRating} onChange={handleRatingChange}>
//               <option value="All">All Ratings</option>
//               {[5, 4, 3, 2, 1].map((r) => (
//                 <option key={r} value={r}>
//                   {Array(r).fill("★").join("")} {r} Stars
//                 </option>
//               ))}
//             </Form.Select>
//           </Col>
//         )}
//       </Row>

//       {/* Ratings Section */}
//       {viewOption === "Ratings" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5>Customer Reviews</h5>
//             {(expanded ? filteredReviews : filteredReviews.slice(0, 3)).map((review) => (
//               <Card key={review._id} className="mb-2">
//                 <Card.Body>
//                   <Card.Title className="d-flex justify-content-between">
//                     <span>{review.name || "Anonymous"}</span>
//                     <span className="text-warning">⭐ {review.rating} / 5</span>
//                   </Card.Title>
//                   <Card.Text>{review.comment}</Card.Text>
//                   <small className="text-muted">
//                     Reviewed on {new Date(review.review_date).toLocaleDateString()}
//                   </small>
//                 </Card.Body>
//               </Card>
//             ))}
//             {filteredReviews.length > 3 && (
//               <Button
//                 variant="link"
//                 onClick={() => setExpanded(!expanded)}
//                 className="mt-2"
//               >
//                 {expanded ? "Show Less" : "View More"}
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       )}

//       {/* Complaints Section */}
//       {viewOption === "Complaints" && (
//         <Card className="shadow-sm">
//           <Card.Body>
//             <h5>Customer Complaints</h5>

//             <Form.Select
//               className="mb-3"
//               onChange={(e) => setSelectedComplaintStatus(e.target.value)}
//               value={selectedComplaintStatus}
//             >
//               <option value="All">All Statuses</option>
//               <option value="Open">Open</option>
//               <option value="Escalated">Escalated</option>
//               <option value="Resolved">Resolved</option>
//             </Form.Select>

//             {(expandedComplaints ? filteredComplaints : filteredComplaints.slice(0, 3)).map((complaint) => {
//               const { color, icon } = statusStyle(complaint.status || "");
//               return (
//                 <Card key={complaint._id} className="mb-3 border" style={{ borderColor: color }}>
//                   <Card.Body>
//                     <Card.Title>
//                       <span style={{ color, fontWeight: "bold" }}>{icon} {complaint.status}</span>
//                       <div>
//                         <strong>User:</strong>{" "}
//                         {complaint?.userId
//                           ? `${complaint.userId.firstname || ""} ${complaint.userId.lastname || ""}`
//                           : "N/A"}
//                       </div>
//                     </Card.Title>
//                     <Card.Text>{complaint.description}</Card.Text>
//                     <small className="text-muted">
//                       Filed on {new Date(complaint.fileddate).toLocaleDateString()}
//                     </small>

//                     {["open", "escalated"].includes(complaint.status?.toLowerCase()) && (
//                       <>
//                         <Form.Control
//                           type="text"
//                           placeholder="Response message..."
//                           className="mt-2"
//                           value={responseMessages[complaint._id] || ""}
//                           onChange={(e) =>
//                             setResponseMessages((prev) => ({
//                               ...prev,
//                               [complaint._id]: e.target.value,
//                             }))
//                           }
//                         />
//                         <Button
//                           variant="success"
//                           className="mt-2"
//                           onClick={() => handleResolve(complaint._id)}
//                         >
//                           Resolve
//                         </Button>
//                       </>
//                     )}

//                     {complaint.status === "resolved" && complaint.resolutionMessage && (
//                       <Alert variant="success" className="mt-2">
//                         <strong>Response:</strong> {complaint.resolutionMessage}
//                       </Alert>
//                     )}
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//             {filteredComplaints.length > 3 && (
//               <Button
//                 variant="link"
//                 onClick={() => setExpandedComplaints(!expandedComplaints)}
//               >
//                 {expandedComplaints ? "Show Less" : "View More"}
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
//   Button,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [viewOption, setViewOption] = useState("Ratings");
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [expanded, setExpanded] = useState(false);
//   const [expandedComplaints, setExpandedComplaints] = useState(false);
//   const [responseMessages, setResponseMessages] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setComplaints(productData.complaints || []);
//         setFilteredReviews(productData.reviews || []);
//       } catch (error) {
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleViewChange = (e) => setViewOption(e.target.value);

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);
//     setFilteredReviews(
//       selected === "All"
//         ? reviews
//         : reviews.filter((review) => String(review.rating) === selected)
//     );
//   };

//   const handleStatusFilter = (e) => {
//     setStatusFilter(e.target.value);
//   };

//   const ratedReviews = reviews.filter((r) => r.rating != null);
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   const statusStyle = (status) => {
//     switch (status.toLowerCase()) {
//       case "open":
//         return { color: "#ffc107", icon: "🟡" };
//       case "escalated":
//         return { color: "#dc3545", icon: "🔴" };
//       case "resolved":
//         return { color: "#198754", icon: "✅" };
//       default:
//         return { color: "gray", icon: "❔" };
//     }
//   };

//   const updateComplaintStatus = async (id, status) => {
//     const message = responseMessages[id];

//     if (status === "resolved" && (!message || message.trim() === "")) return;

//     const payload = status === "resolved"
//       ? { status, resolutionMessage: message }
//       : { status };

//     try {
//       console.log("Updating complaint:", id, "to status:", status, "with message:", message);
//       await axios.put(`/complaint/update/${id}`, payload);

//       setComplaints((prev) =>
//         prev.map((c) =>
//           c._id === id ? { ...c, status, resolutionMessage: message } : c
//         )
//       );

//       setResponseMessages((prev) => ({ ...prev, [id]: "" }));
//     } catch (err) {
//       console.error("Error updating complaint:", err);
//     }
//   };

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   const filteredComplaints = complaints.filter((c) =>
//     statusFilter === "All" ? true : c.status.toLowerCase() === statusFilter.toLowerCase()
//   );

//   return (
//     <Container className="mt-4">
//       <Card className="shadow mb-4">
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-100"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "2rem" }}>{product?.name}</Card.Title>
//               <Card.Text><strong>Description:</strong> {product?.description}</Card.Text>
//               <Card.Text><strong>Brand:</strong> {product?.brand}</Card.Text>
//               <Card.Text><strong>Price:</strong> ₹{product?.price}</Card.Text>
//               <Card.Text><strong>Category:</strong> {product?.category}</Card.Text>
//               <Card.Text>
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       <Row className="mb-3">
//         <Col md={4}>
//           <Form.Select value={viewOption} onChange={handleViewChange}>
//             <option value="Ratings">Ratings</option>
//             <option value="Complaints">Complaints</option>
//           </Form.Select>
//         </Col>

//         {viewOption === "Ratings" && (
//           <Col md={4}>
//             <Form.Select value={selectedRating} onChange={handleRatingChange}>
//               <option value="All">All Ratings</option>
//               {[5, 4, 3, 2, 1].map((r) => (
//                 <option key={r} value={r}>
//                   {Array(r).fill("★").join("")} {r} Stars
//                 </option>
//               ))}
//             </Form.Select>
//           </Col>
//         )}

//         {viewOption === "Complaints" && (
//           <Col md={4}>
//             <Form.Select value={statusFilter} onChange={handleStatusFilter}>
//               <option value="All">All Status</option>
//               <option value="Open">Open</option>
//               <option value="Escalated">Escalated</option>
//               <option value="Resolved">Resolved</option>
//             </Form.Select>
//           </Col>
//         )}
//       </Row>

//       {viewOption === "Ratings" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5>Customer Reviews</h5>
//             {(expanded ? filteredReviews : filteredReviews.slice(0, 3)).map((review) => (
//               <Card key={review._id} className="mb-2">
//                 <Card.Body>
//                   <Card.Title className="d-flex justify-content-between">
//                     <span>{review.name || "Anonymous"}</span>
//                     <span className="text-warning">⭐ {review.rating} / 5</span>
//                   </Card.Title>
//                   <Card.Text>{review.comment}</Card.Text>
//                   <small className="text-muted">
//                     Reviewed on {new Date(review.review_date).toLocaleDateString()}
//                   </small>
//                 </Card.Body>
//               </Card>
//             ))}
//             {filteredReviews.length > 3 && (
//               <Button
//                 variant="link"
//                 onClick={() => setExpanded(!expanded)}
//                 className="mt-2"
//               >
//                 {expanded ? "Show Less" : "View More"}
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       )}

//       {viewOption === "Complaints" && (
//         <Card className="shadow-sm">
//           <Card.Body>
//             <h5>Customer Complaints</h5>
//             {(expandedComplaints ? filteredComplaints : filteredComplaints.slice(0, 3)).map((complaint) => {
//               const { color, icon } = statusStyle(complaint.status || "");
//               return (
//                 <Card key={complaint._id} className="mb-3 border" style={{ borderColor: color }}>
//                   <Card.Body>
//                     <Card.Title>
//                       <span style={{ color, fontWeight: "bold" }}>{icon} {complaint.status}</span>
//                       <div><strong>User:</strong> {complaint?.userId?.firstname || "User"}</div>
//                     </Card.Title>
//                     <Card.Text>{complaint.description}</Card.Text>
//                     <small className="text-muted">
//                       Filed on {new Date(complaint.fileddate).toLocaleDateString()}
//                     </small>

//                     {complaint.status !== "resolved" && (
//                       <>
//                         <Form.Control
//                           type="text"
//                           placeholder="Response message..."
//                           className="mt-2"
//                           value={responseMessages[complaint._id] || ""}
//                           onChange={(e) =>
//                             setResponseMessages((prev) => ({
//                               ...prev,
//                               [complaint._id]: e.target.value,
//                             }))
//                           }
//                         />
//                         <div className="mt-2 d-flex gap-2">
//                           {complaint.status === "open" && (
//                             <Button
//                               variant="warning"
//                               onClick={() => updateComplaintStatus(complaint._id, "escalated")}
//                             >
//                               Escalate
//                             </Button>
//                           )}
//                           {complaint.status !== "open" && (
//                             <Button
//                               variant="success"
//                               onClick={() => updateComplaintStatus(complaint._id, "resolved")}
//                             >
//                               Resolve
//                             </Button>
//                           )}
//                         </div>
//                       </>
//                     )}

//                     {complaint.status === "resolved" && complaint.resolutionMessage && (
//                       <Alert variant="success" className="mt-2">
//                         <strong>Response:</strong> {complaint.resolutionMessage}
//                       </Alert>
//                     )}
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//             {filteredComplaints.length > 3 && (
//               <Button
//                 variant="link"
//                 onClick={() => setExpandedComplaints(!expandedComplaints)}
//               >
//                 {expandedComplaints ? "Show Less" : "View More"}
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Spinner,
//   Alert,
//   Button,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const ProductDetails2 = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [viewOption, setViewOption] = useState("Ratings");
//   const [selectedRating, setSelectedRating] = useState("All");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [isLoading, setIsLoading] = useState(true);
//   const [expanded, setExpanded] = useState(false);
//   const [expandedComplaints, setExpandedComplaints] = useState(false);
//   const [responseMessages, setResponseMessages] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`/product/getProductById/${productId}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setReviews(productData.reviews || []);
//         setComplaints(productData.complaints || []);
//         setFilteredReviews(productData.reviews || []);
//       } catch (error) {
//         setError("Failed to load product details. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const handleViewChange = (e) => setViewOption(e.target.value);

//   const handleRatingChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRating(selected);
//     setFilteredReviews(
//       selected === "All"
//         ? reviews
//         : reviews.filter((review) => String(review.rating) === selected)
//     );
//   };

//   const handleStatusFilter = (e) => {
//     setStatusFilter(e.target.value);
//   };

//   const ratedReviews = reviews.filter((r) => r.rating != null);
//   const averageRating = (
//     ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length || 0
//   ).toFixed(1);

//   const statusStyle = (status) => {
//     switch (status.toLowerCase()) {
//       case "open":
//         return { color: "#ffc107", icon: "🟡" };
//       case "escalated":
//         return { color: "#dc3545", icon: "🔴" };
//       case "resolved":
//         return { color: "#198754", icon: "✅" };
//       default:
//         return { color: "gray", icon: "❔" };
//     }
//   };

//   const updateComplaintStatus = async (id, status) => {
//     const message = responseMessages[id];

//     if (status === "resolved" && !message) return;

//     try {
//       await axios.put(`/complaint/update/${id}`, {
//         status,
//         resolutionMessage: status === "resolved" ? message : undefined,
//       });

//       setComplaints((prev) =>
//         prev.map((c) =>
//           c._id === id ? { ...c, status, resolutionMessage: message } : c
//         )
//       );

//       setResponseMessages((prev) => ({ ...prev, [id]: "" }));
//     } catch (err) {
//       console.error("Error updating complaint:", err);
//     }
//   };

//   if (isLoading)
//     return (
//       <Container className="mt-4 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading product details...</p>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-4">
//         <Alert variant="warning">Product not found.</Alert>
//       </Container>
//     );

//   const filteredComplaints = complaints.filter((c) =>
//     statusFilter === "All" ? true : c.status.toLowerCase() === statusFilter.toLowerCase()
//   );

//   return (
//     <Container className="mt-4">
//       <Card className="shadow mb-4">
//         <Row className="g-0">
//           <Col md={4}>
//             <Card.Img
//               variant="top"
//               src={product?.productURL || "default-image.jpg"}
//               alt={product?.name}
//               className="img-fluid h-100 w-100"
//             />
//           </Col>
//           <Col md={8}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "2rem" }}>{product?.name}</Card.Title>
//               <Card.Text><strong>Description:</strong> {product?.description}</Card.Text>
//               <Card.Text><strong>Brand:</strong> {product?.brand}</Card.Text>
//               <Card.Text><strong>Price:</strong> ₹{product?.price}</Card.Text>
//               <Card.Text><strong>Category:</strong> {product?.category}</Card.Text>
//               <Card.Text>
//                 <strong>Rating:</strong> ⭐ {averageRating} ({ratedReviews.length} reviews)
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>

//       <Row className="mb-3">
//         <Col md={4}>
//           <Form.Select value={viewOption} onChange={handleViewChange}>
//             <option value="Ratings">Ratings</option>
//             <option value="Complaints">Complaints</option>
//           </Form.Select>
//         </Col>

//         {viewOption === "Ratings" && (
//           <Col md={4}>
//             <Form.Select value={selectedRating} onChange={handleRatingChange}>
//               <option value="All">All Ratings</option>
//               {[5, 4, 3, 2, 1].map((r) => (
//                 <option key={r} value={r}>
//                   {Array(r).fill("★").join("")} {r} Stars
//                 </option>
//               ))}
//             </Form.Select>
//           </Col>
//         )}

//         {viewOption === "Complaints" && (
//           <Col md={4}>
//             <Form.Select value={statusFilter} onChange={handleStatusFilter}>
//               <option value="All">All Status</option>
//               <option value="Open">Open</option>
//               <option value="Escalated">Escalated</option>
//               <option value="Resolved">Resolved</option>
//             </Form.Select>
//           </Col>
//         )}
//       </Row>

//       {viewOption === "Ratings" && (
//         <Card className="shadow-sm mb-4">
//           <Card.Body>
//             <h5>Customer Reviews</h5>
//             {(expanded ? filteredReviews : filteredReviews.slice(0, 3)).map((review) => (
//               <Card key={review._id} className="mb-2">
//                 <Card.Body>
//                   <Card.Title className="d-flex justify-content-between">
//                     <span>{review.name || "Anonymous"}</span>
//                     <span className="text-warning">⭐ {review.rating} / 5</span>
//                   </Card.Title>
//                   <Card.Text>{review.comment}</Card.Text>
//                   <small className="text-muted">
//                     Reviewed on {new Date(review.review_date).toLocaleDateString()}
//                   </small>
//                 </Card.Body>
//               </Card>
//             ))}
//             {filteredReviews.length > 3 && (
//               <Button
//                 variant="link"
//                 onClick={() => setExpanded(!expanded)}
//                 className="mt-2"
//               >
//                 {expanded ? "Show Less" : "View More"}
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       )}

// {viewOption === "Complaints" && (
//   <Card className="shadow-sm">
//     <Card.Body>
//       <h5>Customer Complaints</h5>
//       {(expandedComplaints ? filteredComplaints : filteredComplaints.slice(0, 3)).map((complaint) => {
//         const { color, icon } = statusStyle(complaint.status || "");
//         const isOpen = complaint.status === "Open";
//         const isEscalated = complaint.status === "Escalated";
//         const isResolved = complaint.status === "resolved";
//         const showInput = isOpen || isEscalated;

//         return (
//           <Card key={complaint._id} className="mb-3 border" style={{ borderColor: color }}>
//             <Card.Body>
//               <Card.Title>
//                 <span style={{ color, fontWeight: "bold" }}>{icon} {complaint.status}</span>
//                 <div><strong>User:</strong> {complaint?.userId?.firstname || "User"}</div>
//               </Card.Title>
//               <Card.Text>{complaint.description}</Card.Text>
//               <small className="text-muted">
//                 Filed on {new Date(complaint.fileddate).toLocaleDateString()}
//               </small>

//               {showInput && (
//                 <>
//                   <Form.Control
//                     type="text"
//                     placeholder="Response message..."
//                     className="mt-2"
//                     value={responseMessages[complaint._id] || ""}
//                     onChange={(e) =>
//                       setResponseMessages((prev) => ({
//                         ...prev,
//                         [complaint._id]: e.target.value,
//                       }))
//                     }
//                   />
//                   <div className="mt-2 d-flex gap-2">
//                     {isOpen && (
//                       <Button
//                         variant="warning"
//                         onClick={() => updateComplaintStatus(complaint._id, "escalated")}
//                       >
//                         Escalate
//                       </Button>
//                     )}
//                     <Button
//                       variant="success"
//                       onClick={() => updateComplaintStatus(complaint._id, "resolved")}
//                     >
//                       Resolve
//                     </Button>
//                   </div>
//                 </>
//               )}

// {["resolved", "Escalated"].includes(complaint.status?.toLowerCase()) &&
//   complaint.resolutionMessage && (
//     <Alert variant={complaint.status === "resolved" ? "success" : "danger"} className="mt-2">
//       <strong>Response:</strong> {complaint.resolutionMessage}
//     </Alert>
// )}

//             </Card.Body>
//           </Card>
//         );
//       })}

//       {filteredComplaints.length > 3 && (
//         <Button
//           variant="link"
//           onClick={() => setExpandedComplaints(!expandedComplaints)}
//         >
//           {expandedComplaints ? "Show Less" : "View More"}
//         </Button>
//       )}
//     </Card.Body>
//   </Card>
// )}

//     </Container>
//   );
// };

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Spinner,
  Alert,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductDetails2 = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [viewOption, setViewOption] = useState("Ratings");
  const [selectedRating, setSelectedRating] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [expandedComplaints, setExpandedComplaints] = useState(false);
  const [responseMessages, setResponseMessages] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`/product/getProductById/${productId}`);
        const productData = res.data.data;
        setProduct(productData);
        setReviews(productData.reviews || []);
        setComplaints(productData.complaints || []);
        setFilteredReviews(productData.reviews || []);
      } catch (error) {
        setError("Failed to load product details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleViewChange = (e) => setViewOption(e.target.value);

  const handleRatingChange = (e) => {
    const selected = e.target.value;
    setSelectedRating(selected);
    setFilteredReviews(
      selected === "All"
        ? reviews
        : reviews.filter((review) => String(review.rating) === selected)
    );
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  const ratedReviews = reviews.filter((r) => r.rating != null);
  const averageRating = (
    ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length ||
    0
  ).toFixed(1);

  const statusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return { color: "#ffc107", icon: "🟡" };
      case "escalated":
        return { color: "#dc3545", icon: "🔴" };
      case "resolved":
        return { color: "#198754", icon: "✅" };
      default:
        return { color: "gray", icon: "❔" };
    }
  };

  const updateComplaintStatus = async (id, status) => {
    const message = responseMessages[id];

    if ((status === "resolved" || status === "escalated") && !message) return;

    try {
      await axios.put(`/complaint/update/${id}`, {
        status,
        resolutionMessage: message,
      });

      setComplaints((prev) =>
        prev.map((c) =>
          c._id === id ? { ...c, status, resolutionMessage: message } : c
        )
      );

      setResponseMessages((prev) => ({ ...prev, [id]: "" }));
    } catch (err) {
      console.error("Error updating complaint:", err);
    }
  };

  if (isLoading)
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading product details...</p>
      </Container>
    );

  if (error)
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  if (!product)
    return (
      <Container className="mt-4">
        <Alert variant="warning">Product not found.</Alert>
      </Container>
    );

  const filteredComplaints = complaints.filter((c) =>
    statusFilter === "All"
      ? true
      : c.status.toLowerCase() === statusFilter.toLowerCase()
  );

  return (
    <Container className="mt-4">
      <Card className="shadow mb-4">
        <Row className="g-0">
          <Col md={4}>
            <Card.Img
              variant="top"
              src={product?.productURL || "default-image.jpg"}
              alt={product?.name}
              className="img-fluid h-100 w-100"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title style={{fontSize:"3rem", width:"100%"}} as="h1">
                {product?.name}
              </Card.Title>
              <Card.Text className="fs-5">
                <strong>Description:</strong> {product?.description}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Brand:</strong> {product?.brand}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Price:</strong> ₹{product?.price}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Category:</strong> {product?.category}
              </Card.Text>
              <Card.Text className="fs-5">
                <strong>Rating:</strong> ⭐ {averageRating} (
                {ratedReviews.length} reviews)
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Select value={viewOption} onChange={handleViewChange}>
            <option value="Ratings">Ratings</option>
            <option value="Complaints">Complaints</option>
          </Form.Select>
        </Col>

        {viewOption === "Ratings" && (
          <Col md={4}>
            <Form.Select value={selectedRating} onChange={handleRatingChange}>
              <option value="All">All Ratings</option>
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {Array(r).fill("★").join("")} {r} Stars
                </option>
              ))}
            </Form.Select>
          </Col>
        )}

        {viewOption === "Complaints" && (
          <Col md={4}>
            <Form.Select value={statusFilter} onChange={handleStatusFilter}>
              <option value="All">All Status</option>
              <option value="Open">Open</option>
              <option value="Escalated">Escalated</option>
              <option value="Resolved">Resolved</option>
            </Form.Select>
          </Col>
        )}
      </Row>

      {viewOption === "Ratings" && (
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <h5>Customer Reviews</h5>
            {(expanded ? filteredReviews : filteredReviews.slice(0, 3)).map(
              (review) => (
                <Card key={review._id} className="mb-2 border">
                  <Card.Body>
                    <Card.Title className="">
                      <div style={{ margin: "0rem 2rem 0.5rem 0rem" }} >
                        <strong> User: </strong> {review.name || "Anonymous"}{" "}
                        
                      </div>
                      <span style={{ margin: "0rem 2rem 0.5rem 0rem" }} className="fs-6">
                        Comment : {review.comment}
                      </span>
                      <span
                        className="text-warning fs-6"
                        style={{ margin: "0rem 2rem 2rem 0rem" }} 
                      >
                        ⭐ {review.rating} / 5
                      </span>
                      <small className="text-muted d-block mt-3 fs-7">
                        Reviewed on{" "}
                        {new Date(review.review_date).toLocaleDateString()}
                      </small>
                    </Card.Title>
                  </Card.Body>
                </Card>
              )
            )}
            {filteredReviews.length > 3 && (
              <Button
                variant="link"
                onClick={() => setExpanded(!expanded)}
                className="mt-2"
              >
                {expanded ? "Show Less" : "View More"}
              </Button>
            )}
          </Card.Body>
        </Card>
      )}

      {viewOption === "Complaints" && (
        <Card className="shadow-sm">
          <Card.Body>
            <h5>Customer Complaints</h5>
            {(expandedComplaints
              ? filteredComplaints
              : filteredComplaints.slice(0, 3)
            ).map((complaint) => {
              const { color, icon } = statusStyle(complaint.status || "");
              const isOpen = complaint.status.toLowerCase() === "open";
              const isEscalated =
                complaint.status.toLowerCase() === "escalated";
              const showButtons = isOpen || isEscalated;

              return (
                <Card
                  key={complaint._id}
                  className="mb-3 border"
                  style={{ borderColor: color }}
                >
                  <Card.Body>
                    <Card.Title>
                      <div>
                        <strong>User:</strong> {complaint.name || "User"}
                      </div>

                      <Card.Text style={{ marginTop: "1rem" }} className="fs-6">
                        Description : {complaint.description}
                      </Card.Text>
                      <small className="text-muted mr-4 fs-7 ">
                        Filed on{" "}
                        {new Date(complaint.fileddate).toLocaleDateString()}
                      </small>
                      <span style={{ color, fontWeight: "bold" }}>
                        {icon} {complaint.status}
                      </span>
                    </Card.Title>

                    {showButtons && (
                      <>
                        <Form.Control
                          type="text"
                          placeholder="Response message..."
                          className="mt-2"
                          value={responseMessages[complaint._id] || ""}
                          onChange={(e) =>
                            setResponseMessages((prev) => ({
                              ...prev,
                              [complaint._id]: e.target.value,
                            }))
                          }
                        />
                        <div className="mt-2 d-flex gap-2">
                          {isOpen && (
                            <Button
                              variant="warning"
                              onClick={() =>
                                updateComplaintStatus(
                                  complaint._id,
                                  "escalated"
                                )
                              }
                            >
                              Escalate
                            </Button>
                          )}
                          <Button
                            variant="success"
                            onClick={() =>
                              updateComplaintStatus(complaint._id, "resolved")
                            }
                          >
                            Resolve
                          </Button>
                        </div>
                      </>
                    )}

                    {["resolved", "escalated"].includes(
                      (complaint.status || "").toLowerCase()
                    ) &&
                      complaint.resolutionMessage && (
                        <Alert
                          variant={
                            complaint.status.toLowerCase() === "resolved"
                              ? "success"
                              : "danger"
                          }
                          className="mt-2"
                        >
                          <strong>Response:</strong>{" "}
                          {complaint.resolutionMessage}
                        </Alert>
                      )}
                  </Card.Body>
                </Card>
              );
            })}
            {filteredComplaints.length > 3 && (
              <Button
                variant="link"
                onClick={() => setExpandedComplaints(!expandedComplaints)}
              >
                {expandedComplaints ? "Show Less" : "View More"}
              </Button>
            )}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};
