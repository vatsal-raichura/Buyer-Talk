// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Button, Row, Col, Spinner, Badge } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Bounce, toast, ToastContainer } from "react-toastify";

// export const BusinessDetails = () => {
//   const [businesses, setBusinesses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedBusiness, setSelectedBusiness] = useState(null);

// //   const toggleBlockStatus = async (id) => {
// //     try {
// //       const res = await axios.patch(`/admin/toggleBusinessBlock/${id}`);
// //       toast.success(res.data.message, {
// //         position: "top-center",
// //         autoClose: 3000,
// //         transition: Bounce,
// //       });
// //       fetchBusinesses();
// //     } catch (err) {
// //       toast.error("Error updating status", {
// //         position: "top-center",
// //         autoClose: 3000,
// //         transition: Bounce,
// //       });
// //     }
// //   };


// const toggleBlockStatus = async (id) => {
//     try {
//       const res = await axios.patch(`/admin/toggleBusinessBlock/${id}`);
  
//       setBusinesses((prevBusinesses) =>
//         prevBusinesses.map((b) =>
//           b._id === id ? { ...b, isBlocked: !b.isBlocked } : b
//         )
//       );
  
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     } catch (err) {
//       toast.error("Error updating block status", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };
  
//   const deleteBusiness = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       const res = await axios.delete(`/admin/deleteBusiness/${id}`);
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//       fetchBusinesses();
//     } catch (err) {
//       toast.error("Failed to delete business", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };

//   const fetchBusinesses = async () => {
//     try {
//       const res = await axios.get("/admin/allbusiness");
//       setBusinesses(res.data.data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Failed to fetch businesses:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBusinesses();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <Spinner animation="border" variant="primary" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-5">
//       <ToastContainer />
//       <h2 className="text-center mb-4">All Businesses</h2>
//       <Row xs={1} sm={2} md={3} lg={3} className="g-4">
//         {businesses.map((business) => (
//           <Col key={business._id}>
//             <Card className="h-100 shadow-sm border-0 rounded-4 p-2">
//               <Card.Body>
//                 {/* Business Name */}
//                 <h5 className="fw-bold mb-1">
//                   {business.businessname || "Business Name"}
//                 </h5>

//                 {/* Email */}
//                 <div className="text-muted small mb-3">
//                   {business.email || "Email not provided"}
//                 </div>

//                 {/* Description */}
//                 <div className="mb-3">
//                   <strong>Description:</strong>
//                   <div className="text-secondary small">
//                     {business.description || "No description available"}
//                   </div>
//                 </div>

//                 {/* Contact */}
//                 <div className="mb-2">
//                   <strong>Contact:</strong>{" "}
//                   <span className="text-secondary">
//                     {business.contact_no || "N/A"}
//                   </span>
//                 </div>

//                 {/* Status */}
//                 <div className="mb-3">
//                   <strong>Status:</strong>{" "}
//                   <Badge
//                     bg={
//                       business.isBlocked
//                         ? "secondary"
//                         : business.status?.toLowerCase() === "inactive"
//                         ? "danger"
//                         : "success"
//                     }
//                     className="text-uppercase"
//                   >
//                     {business.isBlocked
//                       ? "Blocked"
//                       : business.status?.toLowerCase() === "inactive"
//                       ? "Inactive"
//                       : "Active"}
//                   </Badge>
//                 </div>
//                 <div className="d-grip gap-2 mt-3" >
//                   <Button 
//                     variant="danger"
//                     className="w-50"
//                     onClick={() => {
//                       setSelectedBusiness(business); // set the current business
//                       deleteBusiness(business._id);
//                       setShowModal(false);
//                     }}
//                   >
//                     Delete
//                   </Button>
//                   {/* <Button
//                                           variant={selectedBusiness?.isBlocked ? "success" : "warning"}
//                                           onClick={() => {
//                                             toggleBlockStatus(business._id);
//                                             setShowModal(false);
//                                           }}
//                                         >
//                                           {selectedBusiness?.isBlocked ? "Unblock" : "Block"}
//                                         </Button>  */}

//                   <Button
//                     variant={business.isBlocked ? "success" : "warning"}
//                     className="w-50"
//                     onClick={() => toggleBlockStatus(business._id)}
//                   >
//                     {business.isBlocked ? "Unblock" : "Block"}
//                   </Button>
//                 </div>

//                 {/* Button */}
//                 <div className="d-grid">
//                   <Link
//                     to={`/admin/businessProductDetails/${business._id}`}
//                     className="btn btn-primary"
//                     style={{ textAlign: "center" }}
//                   >
//                     View Products
//                   </Link>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Spinner, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "../../assets/adminbusiness.css";

export const BusinessDetails = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const toggleBlockStatus = async (id) => {
    try {
      const res = await axios.patch(`/admin/toggleBusinessBlock/${id}`);
      setBusinesses((prevBusinesses) =>
        prevBusinesses.map((b) =>
          b._id === id ? { ...b, isBlocked: !b.isBlocked } : b
        )
      );
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
    } catch (err) {
      toast.error("Error updating block status", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
    }
  };

  const deleteBusiness = async (id) => {
    if (!window.confirm("Are you sure you want to delete this business?")) return;

    try {
      const res = await axios.delete(`/admin/deleteBusiness/${id}`);
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      fetchBusinesses();
    } catch (err) {
      toast.error("Failed to delete business", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
    }
  };

  const fetchBusinesses = async () => {
    try {
      const res = await axios.get("/admin/allbusiness");
      setBusinesses(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch businesses:", err);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="full-page-container admin-business-bg">
      <ToastContainer />
      <div className="container py-4">
        <h2 className="text-center text-white mb-4">All Businesses</h2>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {businesses.map((business) => (
            <Col key={business._id}>
              <Card className="h-100 shadow-sm border-0 rounded-4 p-2 business-card">
                <Card.Body>
                  <h5 className="fw-bold mb-1 " style={{color:"darkgreen"}}>
                  <strong>Name: </strong>
                    {business.businessname || "Business Name"}
                  </h5>
                  <div className=" small mb-3" style={{color:"darkblue"}}>
                  <strong>Email: </strong>
                    {business.email || "Email not provided"}
                  </div>
                  <div className="mb-3 " >
                    <strong>Description:</strong>
                    <div className="text-dark small">
                      {business.description || "No description available"}
                    </div>
                  </div>
                  <div className="mb-2 ">
                    <strong>Contact:</strong>{" "}
                    <span className="text-dark">
                      {business.contact_no || "N/A"}
                    </span>
                  </div>
                  <div className="mb-3">
                    <strong>Status:</strong>{" "}
                    <Badge
                      bg={
                        business.isBlocked
                          ? "secondary"
                          : business.status?.toLowerCase() === "inactive"
                          ? "danger"
                          : "success"
                      }
                      className="text-uppercase"
                    >
                      {business.isBlocked
                        ? "Blocked"
                        : business.status?.toLowerCase() === "inactive"
                        ? "Inactive"
                        : "Active"}
                    </Badge>
                  </div>
                  <div className="d-grip gap-2 mt-3">
                    <Button
                      variant="danger"
                      className="w-50"
                      onClick={() => {
                        setSelectedBusiness(business);
                        deleteBusiness(business._id);
                        setShowModal(false);
                      }}
                    >
                      Delete
                    </Button>

                    <Button
                      variant={business.isBlocked ? "success" : "warning"}
                      className="w-50"
                      onClick={() => toggleBlockStatus(business._id)}
                    >
                      {business.isBlocked ? "Unblock" : "Block"}
                    </Button>
                  </div>

                  <div className="d-grid mt-3">
                    <Link
                      to={`/admin/businessProductDetails/${business._id}`}
                      className="btn btn-primary"
                      style={{ textAlign: "center" }}
                    >
                      View Products
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
