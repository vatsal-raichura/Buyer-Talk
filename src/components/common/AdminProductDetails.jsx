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
import "../../assets/adminproducts.css" 
import { ArrowLeft } from "react-bootstrap-icons";


export const AdminProductDetails = () => {
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

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate("/business/businessprofile"); // Fallback if no history
    }
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
    <div className="bg">
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
        <Button
          variant="secondary"
          onClick={handleGoBack}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            
          }}
        >
          <ArrowLeft /> Back 
        </Button>
        
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
        <Card className="shadow-sm mb-4 review-card">
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
                        className="text-warning fs-6 rating-badge"
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
        <Card className="shadow-sm complaint-card">
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
    </div>
  );
};
