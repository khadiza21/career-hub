import React, { useContext, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import AuthContext from '../context/AuthContext/AuthContext';
import SocialLogin from './SocialLogin';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const { signInUser } = useContext(AuthContext);

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

        signInUser(formData?.email, formData?.password)
            .then(result => {
                console.log('sign in', result.user)
            })
            .catch(error => {
                console.log(error);
            })


    };



    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: "400px" }} className="p-4 shadow">
                    <h2 className="text-center mb-4">Sign In</h2>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>


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

export default Login;