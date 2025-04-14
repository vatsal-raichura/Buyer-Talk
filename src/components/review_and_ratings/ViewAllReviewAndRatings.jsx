

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { CustomLoader } from '../CustomLoader'

// export const ViewAllComplaints = () => {

//     const [complaints, setComplaints] = useState([])
//     const [isLoading, setisLoading] = useState(false)
//     const getAllComplaints = async() => {

//         setisLoading(true) 

//         const res = await axios.get("/complaint/complaints")
//         console.log(res.data) //api response...
//         setComplaints(res.data.data)
//         setisLoading(false) 

//     }

//     useEffect(() => {
        
//         getAllComplaints()
        
//     }, [])
    

//   return (
//     <div style={{textAlign:"center"}}>
//       {isLoading == true && <CustomLoader  />}
//       <br />
//         MY Complaints
        
//         <table className='table table-dark'>
//             <thead>
//                 <tr>
                    
                    
//                     <th>Complaint Description</th>
//                     <th>Complaint Status</th>
//                     <th>Complaint File_Date</th>
                    


                    


                   
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                    complaints?.map((ct)=>{
//                     return<tr>
                        
//                         <td>{ct.description}</td>

//                         <td>{ct.status}</td>

//                         <td>{ct.fileddate}</td>
                    
                        
//                     </tr>
//                    }) 
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { CustomLoader } from "../CustomLoader";

// export const ViewAllComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Fetch complaints
//   const getAllComplaints = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get("/complaint/complaints");
//       setComplaints(res.data.data);
//     } catch (error) {
//       console.error("Error fetching complaints:", error);
//     }
//     setIsLoading(false);
//   };

//   // Fetch all products
//   const getAllProducts = async () => {
//     try {
//       const res = await axios.get("/product/product");
//       setProducts(res.data.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     getAllComplaints();
//     getAllProducts();
//   }, []);

//   // Function to get product details by productId
//   const getProductDetails = (productId) => {
//     return products.find((product) => product._id === productId);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       {isLoading && <CustomLoader />}
//       <br />
//       <h2>My Complaints</h2>

//       <table className="table table-dark">
//         <thead>
//           <tr>
//             <th>Product Specification</th>
//             <th>Complaint Name</th>
//             <th>Complaint Description</th>
//             <th>Complaint Status</th>
//             <th>Complaint File Date</th>
//             <th>Product Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.length > 0 ? (
//             complaints.map((ct) => {
//               const product = getProductDetails(ct.productId); // Get product details
//               return (
//                 <tr key={ct._id}>
//                   <td>
//                     {product ? (
//                       <>
//                         <b>Name:</b> {product.name} <br />
//                         <b>Brand:</b> {product.brand} <br />
//                         <b>Price:</b> ${product.price} <br />
//                         <b>Category:</b> {product.category?.name || "No Category"} <br />
//                       </>
//                     ) : (
//                       "No product found"
//                     )}
//                   </td>
//                   <td>{ct.name || "N/A"}</td>
//                   <td>{ct.description}</td>
//                   <td>{ct.status}</td>
//                   <td>{ct.filedate}</td>
//                   <td>
//                     <img
//                       style={{ height: 100, width: 100 }}
//                       src={product?.image || ct?.productURL}
//                       alt="Product"
//                     />
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan="6">No complaints found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { CustomLoader } from '../CustomLoader';

// export const ViewAllComplaints = () => {
//     const [complaints, setComplaints] = useState([]);
//     const [products, setProducts] = useState({});
//     const [isLoading, setIsLoading] = useState(false);

//     // Fetch all complaints
//     const getAllComplaints = async () => {
//         setIsLoading(true);
//         try {
//             const res = await axios.get("/complaint/complaints");
//             const complaintData = res.data.data;

//             // Extract unique product IDs
//             const productIds = [...new Set(complaintData.map(ct => ct.productId))];

//             // Fetch product details
//             const productRes = await axios.get("/product/product");
//             const productData = productRes.data.data;
//             console.log(productData)

//             // Create a product lookup object
//             const productMap = {};
//             productData.forEach(product => {
//                 productMap[product._id] = product;
//             });

//             setProducts(productMap);
//             setComplaints(complaintData);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         getAllComplaints();
//     }, []);

//     return (
//         <div style={{ textAlign: "center" }}>
//             {isLoading && <CustomLoader />}
//             <br />
//             <h2>MY Complaints</h2>
//             <table className='table table-dark'>
//                 <thead>
//                     <tr>
//                         <th>Product Name</th>
//                         <th>Product Brand</th>
//                         <th>Product Price</th>
//                         <th>Product Image</th>
//                         <th>Complaint Description</th>
//                         <th>Complaint Status</th>
//                         <th>Complaint File Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {complaints?.map((ct) => {
//                         const product = products[ct.productId] || {};
//                         return (
//                             <tr key={ct._id}>
//                                 <td>{product.name || "N/A"}</td>
//                                 <td>{product.brand || "N/A"}</td>
//                                 <td>{product.price ? `$${product.price}` : "N/A"}</td>
//                                 <td> 
//                                     {product.productURL ? (
//                                         <img src={product.productURL} alt="Product" style={{ height: 100, width: 100 }} />
//                                     ) : "N/A"}
//                                 </td>
//                                 <td>{ct.description}</td>
//                                 <td>{ct.status}</td>
//                                 <td>{ct.fileddate}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };



import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomLoader } from "../CustomLoader";
import "../../assets/review.css"
import { Link } from "react-router-dom";

export const ViewAllReviewAndRatings = () => {
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch all complaints
  const getAllReviewAndRatings = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/rating/ratings");
      console.log(res.data); // Log API response
      setRatings(res.data.data);
    } catch (error) {
      console.error("Error fetching Review and Ratings:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllReviewAndRatings();
  }, []);

  // const renderStars = (rating) => {
  //   const filledStars = "★".repeat(Math.floor(rating));
  //   const emptyStars = "☆".repeat(5 - Math.floor(rating));
  //   return filledStars + emptyStars;
  // };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const getStarColor = (rating) => {
    switch (rating) {
      case 5:
        return "#4CAF50"; // Green
      case 4:
        return "#2196F3"; // Blue
      case 3:
        return "#f1c40f"; // Amber
      case 2:
        return "#e67e22"; // Orange
      case 1:
        return "#F44336"; // Red
      default:
        return "#ccc"; // Gray fallback
    }
  };
  

  

  return (
    <div className="table-container" style={{ textAlign: "center" }}>
      {isLoading && <CustomLoader />}
      <br />
      <h2> Review and Ratings</h2>
      <table className="complaint-table  ">
        <thead>
          <tr>
            <th>Review and Comments </th>
            <th>Rating</th>
            <th>Review Date</th>
            <th>Product Name</th>
            <th>Product Brand</th>
            <th>Product Price</th>
            <th>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {ratings?.map((rt) => (
            <tr key={rt._id}>
              <td className="description-cell">
                <div className="description-content">{rt.comment}</div>
              </td>
              <td style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
  <span style={{ color: getStarColor(rt.rating) }}>
    {renderStars(rt.rating)}
  </span>{" "}
  ({rt.rating})
</td>
              <td>{new Date(rt.review_date).toLocaleDateString()}</td>

              {/* Check if product details exist */}
              <td>{rt.productId?.name || "N/A"}</td>
              <td>{rt.productId?.brand || "N/A"}</td>
              <td>{rt.productId?.price ? `₹${rt.productId.price}` : "N/A"}</td>
              <td>
                {rt.productId?.productURL ? (
                  <Link to={`/user/productdetails/${rt.productId._id}`}>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
