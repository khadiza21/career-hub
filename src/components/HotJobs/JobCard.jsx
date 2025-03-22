import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const JobCard = ({job}) => {
    const navigate = useNavigate();
    return (
        <div >
        <Card className="shadow-sm p-2">
            <Card.Img variant="top" src={job.logo} alt={job.company_name} style={{ maxHeight: "100px", objectFit: "contain" }} className='border py-2 rounded ' />
            <Card.Body>
                <Card.Title>{job.job_title}</Card.Title>
                <Card.Text>
                    <strong>Company:</strong> {job.company_name} <br />
                    <strong>Location:</strong> {job.location} <br />
                    <strong>Type:</strong> {job.job_type} <br />
                    <strong>Salary:</strong> {job.salary}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/jobs/${job._id}`)}>Apply</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default JobCard;