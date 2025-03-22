import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  
const job = useLoaderData();
const navigate = useNavigate();
    if (!job) {
        return <p>Loading job details...{id}</p>;
    }

    return (
        <Container className="mt-4">
        <Card>
            <Card.Img variant="top" src={job.logo} alt={job.company_name} style={{ maxHeight: "150px", objectFit: "contain" }} />
            <Card.Body>
                <Card.Title>{job.job_title}</Card.Title>
                <Card.Text>
                    <strong>Company:</strong> {job.company_name} <br />
                    <strong>Location:</strong> {job.location} <br />
                    <strong>Job Type:</strong> {job.job_type} <br />
                    <strong>Remote/Onsite:</strong> {job.remote_or_onsite} <br />
                    <strong>Salary:</strong> {job.salary} <br />
                    <strong>Job Description:</strong> {job.job_description} <br />
                    <strong>Responsibilities:</strong> {job.job_responsibility} <br />
                    <strong>Education:</strong> {job.educational_requirements} <br />
                    <strong>Experience:</strong> {job.experiences} <br />
                    <strong>Contact Information:</strong> <br />
                    - <strong>Phone:</strong> {job.contact_information.phone} <br />
                    - <strong>Email:</strong> {job.contact_information.email} <br />
                    - <strong>Address:</strong> {job.contact_information.address}
                </Card.Text>
                  <Button variant="primary" onClick={() => navigate(`/jobApply/${job._id}`)}>Apply Now</Button>
              
            </Card.Body>
        </Card>
    </Container>
    );
};

export default JobDetails;