
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomLoader } from "../CustomLoader";
import "../../assets/complaints2.css" // ✅ Applying same CSS from ViewAllComplaints
import { get } from "react-hook-form";
import { Container, Card, Form, Button } from "react-bootstrap";
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
      console.log("✅ Review and Ratings:", res.data.data);
    } catch (error) {
      console.error("🔥 Error fetching Review and Ratings:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMyRatings();
  }, []);

    const handleDelete = async (ratingId) => {
      if (!window.confirm("Are you sure you want to delete this appointment?")) return;
  
      try {
        setIsLoading(true)
          await axios.delete(`/rating/rating/${ratingId}`)
          setIsLoading(false)
          toast.success("Review and Rating deleted successfully!", { theme: "dark" })
          
          // Remove the deleted appointment from UI
          setRatings(ratings.filter(rt => rt._id !== ratingId))
      } catch (error) {
          console.error("Delete failed:", error)
          toast.error("Failed to delete Review and Rating!", { theme: "dark" })
      }
  }

  return (
    <div className="table-container"> {/* ✅ Uses the same styling */}
    <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />
      {isLoading && <CustomLoader />}
      <h2>My Review and Ratings</h2>
      <table className="complaint-table"> {/* ✅ Uses the same table class */}
        <thead>
          <tr>
          <th>Review and Comments </th>
            <th>Rating</th>
            <th>Review  Date</th>
            <th>Product Name</th>
            <th>Product Brand</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Action</th> {/* ✅ Added Update Button Column */}
          </tr>
        </thead>
        <tbody>
          {ratings.length > 0 ? (
            ratings.map((rt) => (
              <tr  key={rt._id}>
                <td className="description-cell">
                  <div className="description-content">{rt.comment}</div>
                  </td>
              <td>{rt.rating}</td>
              <td>{new Date(rt.review_date).toLocaleDateString()}</td>

              {/* Check if product details exist */}
              <td>{rt.productId?.name || "N/A"}</td>
              <td>{rt.productId?.brand || "N/A"}</td>
              <td>{rt.productId?.price ? `₹${rt.productId.price}` : "N/A"}</td>
              <td>
                              {rt.productId?.productURL ? (
                                <Link to={`/productdetails/${rt.productId._id}`}>
                                  <img
                                    src={rt.productId.productURL}
                                    alt={rt.productId.name}
                                    className="product-img"
                                  />
                                </Link>
                              ) : (
                                "No Image"
                              )}
                            </td>
                <td>
                  <Button  className="btn btn-info" onClick={()=>{handleDelete(rt._id)}}>
                    DELETE
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No Review and Rattings found found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

