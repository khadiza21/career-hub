import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            <Container className='my-5'>
            <h2 className="fs-3 py-3">My Posted Jobs: {jobs.length}</h2>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job._id}>
                                <td>{index + 1}</td>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <Button variant="link">View Applications</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div></Container>
        </div>
    );
};

export default MyPostedJobs;