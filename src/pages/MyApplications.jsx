import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Button, Container, Table } from "react-bootstrap";


const MyApplications = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            <Container className="mt-4">
                <h2 className="mb-4">Job Applications</h2>
                <Table striped bordered hover responsive>
                    <thead className="bg-light">
                        <tr>
                          
                            <th>LinkedIn</th>
                            <th>GitHub</th>
                            <th>Resume</th>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Company Logo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job.id} className="text-center">
                             
                                <td>
                                    <a href={job.linkedIn} target="_blank" rel="noopener noreferrer" className="text-primary">Profile</a>
                                </td>
                                <td>
                                    <a href={job.github} target="_blank" rel="noopener noreferrer" className="text-primary">GitHub</a>
                                </td>
                                <td>
                                    <a href={job.resume} target="_blank" rel="noopener noreferrer" className="text-primary">View Resume</a>
                                </td>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>
                                    <img src={job.company_logo} alt={job.company} className="h-10 mx-auto" style={{ height: "40px" }} />
                                </td>
                                <td>
                                    <Button variant="secondary" onClick={() => handleDelete(job.id)}>
                                      X
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyApplications;
