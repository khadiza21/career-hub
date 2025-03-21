import React, { useContext, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import authentication from '../assets/authentication.gif'
import AuthContext from '../context/AuthContext/AuthContext';
import SocialLogin from './SocialLogin';



const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const [validated, setValidated] = useState(false);
      const [error, setError] = useState("");
      const {createUser} = useContext(AuthContext);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
          event.stopPropagation();
          setError("Please fill in all fields correctly.");
        } else {
          setError("");
          alert("Sign-up successful!");
        }
    
        setValidated(true);

        console.log(formData);
        createUser(formData?.email, formData.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
        
      };



    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                
                  {/* <Lottie animationData={authentication}> </Lottie> */}
                
                <Card style={{ width: "400px" }} className="p-4 shadow">
                    <h2 className="text-center mb-4">Sign Up</h2>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                        </Form.Group>

                        {/* Email Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Enter a valid email.</Form.Control.Feedback>
                        </Form.Group>

                        {/* Password Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                        </Form.Group>

                        {/* Submit Button */}
                        <Button variant="primary" type="submit" className="w-100">
                            Sign Up
                        </Button>
                    </Form>
                    <SocialLogin />
                </Card>
            </Container>
        </div>
    );
};

export default Register;