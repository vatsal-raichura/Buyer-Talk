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
// import "../../assets/complaints2.css" // ✅ Applying same CSS from ViewAllComplaints

// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";

// export const ViewMyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const getMyComplaints = async () => {
//     setIsLoading(true);
//     try {
//       const userId = localStorage.getItem("id");
//       if (!userId) {
//         console.error("🚨 No user ID found in localStorage!");
//         setIsLoading(false);
//         return;
//       }
//       const res = await axios.get(`/complaint/complaintbyuserId/${userId}`);
//       setComplaints(res.data.data);
//       console.log("✅ Complaints:", res.data.data);
//     } catch (error) {
//       console.error("🔥 Error fetching complaints:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getMyComplaints();
//   }, []);

//   const handleDelete = async (complaintId) => {
//     if (!window.confirm("Are you sure you want to delete this appointment?")) return;

//     try {
//       setIsLoading(true)
//         await axios.delete(`/complaint/complaint/${complaintId}`)
//         setIsLoading(false)
//         toast.success("Complaint deleted successfully!", { theme: "dark" })

//         // Remove the deleted appointment from UI
//         setComplaints(complaints.filter(ct => ct._id !== complaintId))
//     } catch (error) {
//         console.error("Delete failed:", error)
//         toast.error("Failed to delete appointment!", { theme: "dark" })
//     }
// }

// const getStatusDetails = (status) => {
//   switch (status?.toLowerCase()) {
//     case "open":
//       return { icon: "🟡", color: "#ffc107" };
//     case "escalated":
//       return { icon: "🔴", color: "#dc3545" };
//     case "resolved":
//       return { icon: "✅", color: "#198754" };
//     default:
//       return { icon: "❔", color: "gray" };
//   }
// };

//   return (
//     <div className="table-container"> {/* ✅ Uses the same styling */}
//     <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />

//           {isLoading && <CustomLoader />}

//       <h2>My Complaints</h2>
//       <table className="complaint-table"> {/* ✅ Uses the same table class */}
//         <thead>
//           <tr>
//             <th>Complaint Description</th>
//             <th>Status</th>

//             <th>Response</th>

//             <th>Filed Date</th>
//             <th>Product Name</th>

//             <th>Product Image</th>
//             <th>Action</th> {/* ✅ Added Update Button Column */}
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.length > 0 ? (
//             complaints.map((ct) => (
//               <tr key={ct._id}>

//                 <td className="description-cell">
//                   <div className="description-content">{ct.description}</div>
//                 </td>
//                 <td>
//   <span className={`status-badge ${ct.status?.toLowerCase()}`}>
//     {getStatusDetails(ct.status).icon} {ct.status}
//   </span>
// </td>
//                 <td ><div>{ct.resolutionMessage || "N|A"}</div></td>
//                 <td>{new Date(ct.fileddate).toLocaleDateString()}</td>
//                 <td>{ct.productId?.name || "No product found"}</td>

//                 <td >
//                                 {ct.productId?.productURL ? (
//                                   <Link to={`/user/productdetails/${ct.productId._id}`}>
//                                     <img
//                                       src={ct.productId.productURL}
//                                       alt={ct.productId.name}
//                                       className="product-img"
//                                     />
//                                   </Link>
//                                 ) : (
//                                   "No Image"
//                                 )}
//                               </td>
//                 <td>
//                   <Button  className="btn btn-info" onClick={()=>{handleDelete(ct._id)}}>
//                     DELETE
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8">No complaints found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// ViewMyComplaints.jsx
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { CustomLoader } from "../CustomLoader";
// import "../../assets/complaints2.css";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";

// export const ViewMyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [expandedResponse, setExpandedResponse] = useState(null);

//   const getMyComplaints = async () => {
//     setIsLoading(true);
//     try {
//       const userId = localStorage.getItem("id");
//       if (!userId) {
//         console.error("\uD83D\uDEA8 No user ID found in localStorage!");
//         setIsLoading(false);
//         return;
//       }
//       const res = await axios.get(`/complaint/complaintbyuserId/${userId}`);
//       setComplaints(res.data.data);
//     } catch (error) {
//       console.error("\uD83D\uDD25 Error fetching complaints:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getMyComplaints();
//   }, []);

//   const handleDelete = async (complaintId) => {
//     if (!window.confirm("Are you sure you want to delete this complaint?")) return;
//     try {
//       setIsLoading(true);
//       await axios.delete(`/complaint/complaint/${complaintId}`);
//       setIsLoading(false);
//       toast.success("Complaint deleted successfully!", { theme: "dark" });
//       setComplaints(complaints.filter(ct => ct._id !== complaintId));
//     } catch (error) {
//       console.error("Delete failed:", error);
//       toast.error("Failed to delete complaint!", { theme: "dark" });
//     }
//   };

//   const toggleResponse = (id) => {
//     setExpandedResponse(expandedResponse === id ? null : id);
//   };

//   const getStatusDetails = (status) => {
//     switch (status?.toLowerCase()) {
//       case "open": return { icon: "\uD83D\uDFE1", color: "#ffc107" };
//       case "escalated": return { icon: "\uD83D\uDD34", color: "#dc3545" };
//       case "resolved": return { icon: "\u2705", color: "#198754" };
//       default: return { icon: "❔", color: "gray" };
//     }
//   };

//   return (
//     <Container fluid className="complaint-container">
//     <ToastContainer position="top-left" autoClose={5000} theme="dark" transition={Bounce} />
//     {isLoading && <CustomLoader />}
//     <h2 className="mb-4 text-center">My Complaints</h2>
//     <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-4">
//       {complaints.length > 0 ? (
//         complaints.map(ct => {
//           const status = getStatusDetails(ct.status);
//           const isExpanded = expandedResponse === ct._id;

//           return (
//             <Col key={ct._id}>
//               <Card className={`complaint-card h-100 ${isExpanded ? 'expanded' : ''}`}>
//               <Card.Body>
//   <h5 className="complaint-title">{ct.productId?.name || "No Product Name"}</h5>

//   <div className="complaint-field">
//     <strong>Description:</strong>
//     <p className="text-break mb-2">{ct.description}</p>
//   </div>

//   <div className="complaint-field">
//     <strong>Status:</strong>{" "}
//     <span style={{ color: status.color }}>{status.icon} {ct.status}</span>
//   </div>

//   <div className="complaint-field">
//     <strong>Filed Date:</strong> {new Date(ct.fileddate).toLocaleDateString()}
//   </div>

//   <div className="complaint-field">
//     <strong>Response:</strong>{" "}
//     {ct.resolutionMessage ? (
//       <>
//         <span
//           className="text-info view-response-toggle"
//           role="button"
//           onClick={() => toggleResponse(ct._id)}
//         >
//           {isExpanded ? "Hide Response" : "View Response"}
//         </span>
//         {isExpanded && (
//           <p className="mt-2 bg-light p-2 rounded text-break mb-0">
//             {ct.resolutionMessage}
//           </p>
//         )}
//       </>
//     ) : (
//       <span className="text-muted">N/A</span>
//     )}
//   </div>
// </Card.Body>
// <Card.Footer className="complaint-footer">
//   {ct.productId?.productURL ? (
//     <div className="footer-left">
//       <img
//         src={ct.productId.productURL}
//         alt={ct.productId.name}
//         className="complaint-img"
//       />
//       <span
//         className="flip-link"
//         onClick={() => toggleFlip(ct._id)}
//       >
//         Click to see product details
//       </span>
//     </div>
//   ) : (
//     <span>No Image</span>
//   )}
//   <Button
//     variant="danger"
//     size="sm"
//     className="footer-delete-btn"
//     onClick={() => handleDelete(ct._id)}
//   >
//     Delete
//   </Button>
// </Card.Footer>

//               </Card>
//             </Col>
//           );
//         })
//       ) : (
//         <p className="text-center">No complaints found</p>
//       )}
//     </Row>
//   </Container>

//   );
// };

import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomLoader } from "../CustomLoader";
import "../../assets/complaints.css" // Ensure you import CSS
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ViewMyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all complaints
  const getAllComplaints = async () => {
    setIsLoading(true);
    try {
      const userId = localStorage.getItem("id");
            if (!userId) {
              console.error("\uD83D\uDEA8 No user ID found in localStorage!");
              setIsLoading(false);
              return;
            }

      const res = await axios.get(`/complaint/complaintbyuserId/${userId}`);
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
    <div className="table-container ">
      
      {isLoading && <CustomLoader />}
      <h2>My Complaints</h2>
      <table className="complaint-table">
        <thead>
          <tr>
            <th>Complaint Description</th>
            <th>Status</th>
           

            <th>Filed Date</th>
            <th>Response</th>
            <th>Product Name</th>
            
            <th>Product Image</th>
            <th>Action</th>
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
               
                <td>{new Date(ct.fileddate).toLocaleDateString()}</td>
                <td>{ct.resolutionMessage || "N|A"}</td>
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
              <td><Button variant="danger" className="delete-btn" onClick={() => handleDelete(rt._id)}>DELETE</Button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No complaints found</td>
            </tr>
          )}
        </tbody>
      </table>
          {/*mobile responsive view */}
          <div className="mobile-card-container">
        {complaints.map((ct) => (
          <div className="mobile-card" key={ct._id}>
            <p><strong>Description:</strong> {ct.description}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={`status-badge ${ct.status?.toLowerCase()}`}>
                {getStatusDetails(ct.status).icon} {ct.status}
              </span>
            </p>
            <p><strong>Filed Date:</strong> {new Date(ct.fileddate).toLocaleDateString()}</p>
            <p><strong>Response:</strong> {ct.resolutionMessage || "N/A"}</p>
            <p><strong>Product:</strong> {ct.productId?.name || "N/A"}</p>
            <div className="product-img-wrapper">
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
            </div>
            <Button variant="danger" className="delete-btn" onClick={() => handleDelete(rt._id)}>DELETE</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
