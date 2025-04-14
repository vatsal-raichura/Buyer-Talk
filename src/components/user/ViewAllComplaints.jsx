

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



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { CustomLoader } from "../CustomLoader";
// import "../../assets/complaints.css"



// export const ViewAllComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Function to fetch all complaints
//   const getAllComplaints = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get("/complaint/complaints");
//       console.log(res.data); // Log API response
//       setComplaints(res.data.data);
//     } catch (error) {
//       console.error("Error fetching complaints:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getAllComplaints();
//   }, []);

//   return (
//     <div style={{ textAlign: "center" }}>
//       {isLoading && <CustomLoader />}
//       <br />
//       <h2>All Complaints</h2>
//       <table className="table table-striped table-hover table-bordered">
//         <thead>
//           <tr>
//             <th>Complaint Description</th>
//             <th>Complaint Status</th>
//             <th>Complaint Filed Date</th>
//             <th>Product Name</th>
//             <th>Product Brand</th>
//             <th>Product Price</th>
//             <th>Product Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints?.map((ct) => (
//             <tr key={ct._id}>
//               <td style={{ width: "25%",  textAlign: "left"}}>{ct.description}</td>
//               <td>{ct.status}</td>
//               <td>{new Date(ct.fileddate).toLocaleDateString()}</td>

//               {/* Check if product details exist */}
//               <td>{ct.productId?.name || "N/A"}</td>
//               <td>{ct.productId?.brand || "N/A"}</td>
//               <td>{ct.productId?.price ? `$${ct.productId.price}` : "N/A"}</td>
//               <td>
//                 {ct.productId?.productURL ? (
//                   <img
//                     src={ct.productId.productURL}
//                     alt={ct.productId.name}
//                     style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }}
//                   />
//                 ) : (
//                   "No Image"
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { CustomLoader } from "../CustomLoader";
// import "../../assets/complaints.css"; // Make sure to import the CSS file

// export const ViewAllComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Fetch all complaints
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

//   useEffect(() => {
//     getAllComplaints();
//   }, []);

//   return (
//     <div className="table-container"> {/* Applying the container class */}
//       {isLoading && <CustomLoader />}
//       <h2 className="table-title">My Complaints</h2> {/* Styled title */}

//       <table>
//         <thead>
//           <tr>
//             <th className="description-column">Complaint Description</th> {/* Wider column for description */}
//             <th>Complaint Status</th>
//             <th>Complaint Filed Date</th>
//             <th>Product Name</th>
//             <th>Product Brand</th>
//             <th>Product Price</th>
//             <th>Product Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.length > 0 ? (
//             complaints.map((ct) => (
//               <tr key={ct._id}>
//                 <td className="description-cell">{ct.description}</td> {/* Adjusted width */}
//                 <td>{ct.status}</td>
//                 <td>{new Date(ct.fileddate).toLocaleDateString()}</td>
//                 <td>{ct.productId?.name || "N/A"}</td>
//                 <td>{ct.productId?.brand || "N/A"}</td>
//                 <td>{ct.productId?.price ? `$${ct.productId.price}` : "N/A"}</td>
//                 <td>
//                   {ct.productId?.productURL ? (
//                     <img
//                       src={ct.productId.productURL}
//                       alt={ct.productId.name}
//                       className="product-img" // Applying the image class
//                     />
//                   ) : (
//                     "No Image"
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="no-data">No complaints found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };


import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomLoader } from "../CustomLoader";
import "../../assets/complaints.css" // Ensure you import CSS
import { Link } from "react-router-dom";

export const ViewAllComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all complaints
  const getAllComplaints = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/complaint/complaints");
      setComplaints(res.data.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllComplaints();
  }, []);

  const getStatusDetails = (status) => {
    switch (status?.toLowerCase()) {
      case "open":
        return { icon: "🟡", color: "#ffc107" };
      case "escalated":
        return { icon: "🔴", color: "#dc3545" };
      case "resolved":
        return { icon: "✅", color: "#198754" };
      default:
        return { icon: "❔", color: "gray" };
    }
  };

  return (
    <div className="table-container">
      
      {isLoading && <CustomLoader />}
      <h2>All Complaints</h2>
      <table className="complaint-table">
        <thead>
          <tr>
            <th>Complaint Description</th>
            <th>Status</th>
            <th>Response</th>

            <th>Filed Date</th>
            <th>Product Name</th>
            
            <th>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length > 0 ? (
            complaints.map((ct) => (
              <tr key={ct._id}>
                {/* Wrap description properly */}
                <td className="description-cell">
                  <div className="description-content">{ct.description}</div>
                </td>
                <td>
                <span className={`status-badge ${ct.status?.toLowerCase()}`}>
            {getStatusDetails(ct.status).icon} {ct.status}
             </span>
            </td>
                <td>{ct.resolutionMessage || "N|A"}</td>
                <td>{new Date(ct.fileddate).toLocaleDateString()}</td>
                <td>{ct.productId?.name || "N/A"}</td>
                
                <td>
                {ct.productId?.productURL ? (
                  <Link to={`/user/productdetails/${ct.productId._id}`}>
                    <img
                      src={ct.productId.productURL}
                      alt={ct.productId.name}
                      className="product-img"
                    />
                  </Link>
                ) : (
                  "No Image"
                )}
              </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No complaints found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
