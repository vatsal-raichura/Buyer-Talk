import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { CustomLoader } from '../CustomLoader';

export const SelectRole = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignupRedirect = () => {
    if (!role) {
      toast.error("Please select a role!", { transition: Bounce, theme: "dark" });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      if (role === "user") navigate("/signup");
      else if (role === "business") navigate("/businessSignup");
      else if (role === "admin") navigate("/adminSignup");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <ToastContainer position="top-left" autoClose={3000} theme="dark" transition={Bounce} />
      {isLoading && <CustomLoader />}
      <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: "url(src/assets/images/modern-productivity-concept-with-flat-design_23-2147966172.jpg)", backgroundSize: "cover",backgroundRepeat:"no-repeat" }}>
        <Card className="m-3 p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
          <Card.Body className="px-4">
            <h2 className="text-uppercase text-center mb-4">Select Signup Role</h2>
            
            <Form.Group className="mb-3">
              <Form.Label>Select your role</Form.Label>
              <Form.Select value={role} onChange={handleRoleChange}>
                <option value="">-- Choose Role --</option>
                <option value="user">User</option>
                <option value="business">Business</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>

            <Button className="mt-3 w-100" variant="primary" size="lg" onClick={handleSignupRedirect}>
              Continue
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};








