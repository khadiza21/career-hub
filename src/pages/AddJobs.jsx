import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJobs = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData)
        const { min, max, currency, ...newJob } = initialData;
        console.log(min, max, currency, newJob)
        newJob.salaryRange = { min, max, currency }
        
        newJob.educational_requirements = newJob.educational_requirements.split('\n');
        newJob.job_responsibility = newJob.job_responsibility.split('\n')
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has been added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs')
                }
            })
    }

    return (
        <div>
            <Container>
                <h2 className="text-3xl">Post a new Job</h2>
                <Form onSubmit={handleAddJob}>
                    {/* Job Title */}
                    <Form.Group controlId="jobTitle" className="mb-3">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Job Title" required />
                    </Form.Group>

                    {/* Job Location */}
                    <Form.Group controlId="jobLocation" className="mb-3">
                        <Form.Label>Job Location</Form.Label>
                        <Form.Control type="text" name='location' placeholder="Job Location" required />
                    </Form.Group>

                    {/* Job Type */}
                    <Form.Group controlId="jobType" className="mb-3">
                        <Form.Label>Job Type</Form.Label>
                        <Form.Select name='jobType' defaultValue="">
                            <option disabled value="">Pick a Job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Job Field */}
                    <Form.Group controlId="jobField" className="mb-3">
                        <Form.Label>Job Field</Form.Label>
                        <Form.Select name='jobField' defaultValue="">
                            <option disabled value="">Pick a Job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Salary Range */}
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="minSalary">
                                <Form.Label>Min Salary</Form.Label>
                                <Form.Control type="text" name='min' placeholder="Min" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="maxSalary">
                                <Form.Label>Max Salary</Form.Label>
                                <Form.Control type="text" name='max' placeholder="Max" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="currency">
                                <Form.Label>Currency</Form.Label>
                                <Form.Select name="currency" defaultValue="">
                                    <option disabled value="">Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Job Description */}
                    <Form.Group controlId="jobDescription" className="mb-3">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" name="job_description" placeholder="Job Description" required />
                    </Form.Group>

                    {/* Company Name */}
                    <Form.Group controlId="companyName" className="mb-3">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" name='company_name' placeholder="Company Name" required />
                    </Form.Group>
                  
                    {/* Educational Requirements */}
                    <Form.Group controlId="educationalRequirements" className="mb-3">
                        <Form.Label>Educational Requirements</Form.Label>
                        <Form.Control as="textarea" name="educational_requirements" placeholder="Put each requirement on a new line" required />
                    </Form.Group>

                    {/* Job Responsibilities */}
                    <Form.Group controlId="jobResponsibilities" className="mb-3">
                        <Form.Label>Job Responsibilities</Form.Label>
                        <Form.Control as="textarea" name="job_responsibility" placeholder="Write each responsibility on a new line" required />
                    </Form.Group>

                    {/* HR Name */}
                    <Form.Group controlId="hrName" className="mb-3">
                        <Form.Label>HR Name</Form.Label>
                        <Form.Control type="text" name='hr_name' placeholder="HR Name" required />
                    </Form.Group>

                    {/* HR Email */}
                    <Form.Group controlId="hrEmail" className="mb-3">
                        <Form.Label>HR Email</Form.Label>
                        <Form.Control type="email" name='hr_email' defaultValue={user?.email} placeholder="HR Email" required />
                    </Form.Group>

                    {/* Application Deadline */}
                    <Form.Group controlId="applicationDeadline" className="mb-3">
                        <Form.Label>Application Deadline</Form.Label>
                        <Form.Control type="date" name='applicationDeadline' required />
                    </Form.Group>

                    {/* Company Logo */}
                    <Form.Group controlId="companyLogo" className="mb-3">
                        <Form.Label>Company Logo URL</Form.Label>
                        <Form.Control type="text" name='logo' placeholder="Company Logo URL" required />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddJobs;