
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { CustomLoader } from "../CustomLoader";
// import { Link } from "react-router-dom";
// // import "../../assets/complaints.css" 

// export const ViewMyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Fetch user's complaints
//   const getMyComplaints = async () => {
//     setIsLoading(true);
//     try {
//       const userId = localStorage.getItem("id"); 
//       if (!userId) {
//         console.error("🚨 User ID is missing from localStorage!");
//         return;
//       }

//       console.log(`Fetching complaints for userId: ${userId}`);
//       const res = await axios.get(`/complaint/complaintbyuserId/${userId}`);
//       setComplaints(res.data.data);
//     } catch (error) {
//       console.error("🔥 Error fetching complaints:", error);
//     }
//     setIsLoading(false);
// };


//   useEffect(() => {
//     getMyComplaints();
//   }, []);

//   return (
//     <div className="table-container">
//       {isLoading && <CustomLoader />}
//       <h2>My Complaints</h2>

//       <table className="complaint-table">
//         <thead>
//           <tr>
//           <th>Complaint Description</th>
//             <th>Status</th>
//             <th>Filed Date</th>
//             <th>Product Name</th>
//             <th>Brand</th>
//             <th>Price</th>
//             <th>Product Image</th>
//             <th>ACTION</th>

//           </tr>
//         </thead>
//         <tbody>
//           {complaints.length > 0 ? (
//             complaints.map((ct) => (
//               <tr key={ct._id}>
//                 {/* Product Details */}
//                 <td className="description-cell">
//                   <div className="description-content">{ct.description}</div>
//                 </td>
//                 <td>{ct.status}</td>
//                 <td>{new Date(ct.fileddate).toLocaleDateString()}</td>
//                 <td>{ct.productId?.name || "No product found"}</td>
//                 <td>{ct.productId?.brand || "No Brand"}</td>

//                 {/* Complaint Details */}
//                 <td>{ct.productId?.price ? `$${ct.productId.price}` : "N/A"}</td>
                
               
               

//                 {/* Product Image */}
//                 <td>
//                   {ct.productId?.productURL ? (
//                     <img className="product-img" src={ct.productId.productURL} alt="Product" />
//                   ) : (
//                     "No Image"
//                   )}
//                 </td>
//                 <td>
//                   <Link to={`/complaint/updatecomplaint/${ct._id}`} className="btn btn-info">
//                     UPDATE 
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7">No complaints found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { CustomLoader } from "../CustomLoader";
// import "../../assets/review2.css" 
// import { get } from "react-hook-form";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";

// export const ViewMyReviewAndRatings = () => {
//   const [ratings, setRatings] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const getMyRatings = async () => {
//     setIsLoading(true);
//     try {
//       const userId = localStorage.getItem("id");
//       if (!userId) {
//         console.error("🚨 No user ID found in localStorage!");
//         setIsLoading(false);
//         return;
//       }
//       const res = await axios.get(`/rating/reviewandratingbyuserId/${userId}`);
//       setRatings(res.data.data);
//       console.log("✅ Review and Ratings:", res.data.data);
//     } catch (error) {
//       console.error("🔥 Error fetching Review and Ratings:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getMyRatings();
//   }, []);

//     const handleDelete = async (ratingId) => {
//       if (!window.confirm("Are you sure you want to delete this appointment?")) return;
  
//       try {
//         setIsLoading(true)
//           await axios.delete(`/rating/rating/${ratingId}`)
//           setIsLoading(false)
//           toast.success("Review and Rating deleted successfully!", { theme: "dark" })
          
         
//           setRatings(ratings.filter(rt => rt._id !== ratingId))
//       } catch (error) {
//           console.error("Delete failed:", error)
//           toast.error("Failed to delete Review and Rating!", { theme: "dark" })
//       }
//   }

//   // const renderStars = (rating) => {
//   //   const filledStars = "★".repeat(Math.floor(rating));
//   //   const emptyStars = "☆".repeat(5 - Math.floor(rating));
//   //   return filledStars + emptyStars;
//   // };

//   const renderStars = (rating) => {
//     return "★".repeat(rating) + "☆".repeat(5 - rating);
//   };

  
//   const getStarColor = (rating) => {
//     switch (rating) {
//       case 5:
//         return "#4CAF50"; // Green
//       case 4:
//         return "#2196F3"; // Blue
//       case 3:
//         return "#f1c40f"; // Amber
//       case 2:
//         return "#e67e22"; // Orange
//       case 1:
//         return "#F44336"; // Red
//       default:
//         return "#ccc"; // Gray fallback
//     }
//   };
  
  

//   return (
//     <div className="table-container"> {/* ✅ Uses the same styling */}
//     <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />
//       {isLoading && <CustomLoader />}
//       <h2>My Review and Ratings</h2>
//       <table className="complaint-table"> {/* ✅ Uses the same table class */}
//         <thead>
//           <tr>
//           <th>Review and Comments </th>
//             <th>Rating</th>
//             <th>Review  Date</th>
//             <th>Product Name</th>
            
//             <th>Product Image</th>
//             <th>Action</th> {/* ✅ Added Update Button Column */}
//           </tr>
//         </thead>
//         <tbody>
//           {ratings.length > 0 ? (
//             ratings.map((rt) => (
//               <tr  key={rt._id}>
//                 <td data-label="Review and Comments" className="description-cell">
//   <div className="description-content">{rt.comment}</div>
// </td>
// <td data-label="Rating" style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
//   <span style={{ color: getStarColor(rt.rating) }}>
//     {renderStars(rt.rating)}
//   </span>{" "}
//   ({rt.rating})
// </td>
// <td data-label="Review Date" className="fs-5">
//   {new Date(rt.review_date).toLocaleDateString()}
// </td>
// <td data-label="Product Name" className="fs-5">
//   {rt.productId?.name || "N/A"}
// </td>
// <td data-label="Product Image">
//   {rt.productId?.productURL ? (
//     <Link to={`/user/productdetails/${rt.productId._id}`}>
//       <img
//         src={rt.productId.productURL}
//         alt={rt.productId.name}
//         className="product-img"
//       />
//     </Link>
//   ) : (
//     "No Image"
//   )}
// </td>
// <td data-label="Action">
//   <Button className="btn btn-info" onClick={() => handleDelete(rt._id)}>
//     DELETE
//   </Button>
// </td>

//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8">No Review and Rattings found found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {/* Mobile Card View */}
// {/* Mobile Card View */}
// <div className="mobile-card-container">
//   {ratings.map((rt) => (
//     <div className="mobile-card" key={rt._id}>
//       <h5>Review & Comment</h5>
//       <p>{rt.comment}</p>

//       <h5>Rating</h5>
//       <p className="rating" style={{ color: getStarColor(rt.rating) }}>
//         {renderStars(rt.rating)} ({rt.rating})
//       </p>

//       <h5>Date</h5>
//       <p>{new Date(rt.review_date).toLocaleDateString()}</p>

//       <h5>Product</h5>
//       <p>{rt.productId?.name || "N/A"}</p>

//       {rt.productId?.productURL ? (
//         <img src={rt.productId.productURL} alt="Product" />
//       ) : (
//         <p>No Image</p>
//       )}

//       <Button
//         variant="danger"
//         className="delete-btn"
//         onClick={() => handleDelete(rt._id)}
//       >
//         DELETE
//       </Button>
//     </div>
//   ))}
// </div>


//     </div>
//   );
// };

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomLoader } from "../CustomLoader";
import "../../assets/review2.css";
import { Container, Button } from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const ViewMyReviewAndRatings = () => {
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMyRatings = async () => {
    setIsLoading(true);
    try {
      const userId = localStorage.getItem("id");
      if (!userId) {
        console.error("🚨 No user ID found in localStorage!");
        setIsLoading(false);
        return;
      }
      const res = await axios.get(`/rating/reviewandratingbyuserId/${userId}`);
      setRatings(res.data.data);
    } catch (error) {
      console.error("🔥 Error fetching Review and Ratings:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMyRatings();
  }, []);

  const handleDelete = async (ratingId) => {
    if (!window.confirm("Are you sure you want to delete this rating?")) return;
    try {
      setIsLoading(true);
      await axios.delete(`/rating/rating/${ratingId}`);
      setRatings(ratings.filter(rt => rt._id !== ratingId));
      toast.success("Review and Rating deleted successfully!", { theme: "dark" });
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete Review and Rating!", { theme: "dark" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const getStarColor = (rating) => {
    switch (rating) {
      case 5: return "#4CAF50";
      case 4: return "#2196F3";
      case 3: return "#f1c40f";
      case 2: return "#e67e22";
      case 1: return "#F44336";
      default: return "#ccc";
    }
  };

  return (
    <div className="table-container ">
      <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />
      {isLoading && <CustomLoader />}
      <h2 className="title">My Review and Ratings</h2>

      {/* Desktop Table View */}
      <table className="complaint-table">
        <thead>
          <tr>
            <th>Review and Comments</th>
            <th>Rating</th>
            <th>Review Date</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ratings.length > 0 ? ratings.map(rt => (
            <tr key={rt._id}>
              <td>{rt.comment}</td>
              <td style={{ color: getStarColor(rt.rating), fontSize: "1.2rem" }}>
                {renderStars(rt.rating)} ({rt.rating})
              </td>
              <td>{new Date(rt.review_date).toLocaleDateString()}</td>
              <td>{rt.productId?.name || "N/A"}</td>
              <td>
                {rt.productId?.productURL ? (
                  <Link to={`/user/productdetails/${rt.productId._id}`}>
                    <img src={rt.productId.productURL} alt={rt.productId.name} className="product-img" />
                  </Link>
                ) : "No Image"}
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(rt._id)}>DELETE</Button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan="6">No Reviews Found</td></tr>
          )}
        </tbody>
      </table>

      {/* Mobile Card View */}
      <div className="mobile-card-container">
        {ratings.map(rt => (
          <div className="mobile-card" key={rt._id}>
            
            <p><strong>Comment:</strong> {rt.comment}</p>
            <p><strong>Rating:</strong> <span style={{ color: getStarColor(rt.rating) }}>{renderStars(rt.rating)} ({rt.rating})</span></p>
            <p><strong>Date:</strong> {new Date(rt.review_date).toLocaleDateString()}</p>
            <p><strong>Product:</strong> {rt.productId?.name || "N/A"}</p>
            {rt.productId?.productURL ? (
              <img src={rt.productId.productURL} alt="Product" />
            ) : (
              <p>No Image</p>
            )}
            <Button variant="danger" className="delete-btn" onClick={() => handleDelete(rt._id)}>DELETE</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
