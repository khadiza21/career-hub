import { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { Col, Container, Row } from 'react-bootstrap';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error("Error fetching jobs:", error));
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    {jobs.map((job) => (
                        <Col key={job._id} md={4} className="mb-4">
                            <JobCard job={job} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HotJobs;