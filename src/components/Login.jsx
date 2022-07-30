import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Login = () => {
    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: "darkblue", fontStyle: "inherit", marginLeft: "10px" }}> <b> ATools</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                        </Nav>
                        <Form className="d-flex">

                            <Button style={{ marginRight: "30px" }} >Start Free Trial</Button>
                        </Form>
                        <Form className="d-flex">

                            <Button style={{ marginRight: "10px", backgroundColor: "orangered", width: "90px" }} >Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Login