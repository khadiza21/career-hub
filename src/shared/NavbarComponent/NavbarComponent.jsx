import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import AuthContext from "../../context/AuthContext/AuthContext";

const NavbarComponent = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Successfully sign out! ');
            })
            .catch(error => {
                console.log("error", error);
            })
    }


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">Career Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>

                        </Nav>

                        {

                            user ?
                                <div>
                                    <Button onClick={handleSignOut} variant="primary" type="submit" className="w-100">
                                        Sign Out
                                    </Button>
                                </div> :
                                <div className="d-flex gap-4 me-end">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;