import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const JobApply = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn, github, resume

        }


        fetch("http://localhost:5000/job-applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobApplication),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/myApplications')
            })

   
        }


    return (
        <div>
            <Container className="mt-5">
                <Card className="shadow p-4">
                    <Card.Body>
                        <Card.Title className="mb-4">Job Application</Card.Title>
                        <Form onSubmit={submitJobApplication}>
                            <Form.Group className="mb-3" controlId="linkedIn">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control type="url" name="linkedIn" placeholder="Enter LinkedIn URL" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="github">
                                <Form.Label>GitHub Profile</Form.Label>
                                <Form.Control type="url" name="github" placeholder="Enter GitHub URL" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="resume">
                                <Form.Label>Resume (URL)</Form.Label>
                                <Form.Control type="url" name="resume" accept=".pdf" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit Application
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default JobApply;