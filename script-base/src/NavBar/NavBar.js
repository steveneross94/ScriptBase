import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand as={Link} to="/">ScriptBase</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/prescriptions">MyScripts</Nav.Link>
                    <Nav.Link as={Link} to="/healthcare-info">Healthcare News</Nav.Link>
                    <Nav.Link as={Link} to="/covid-info">Covid Info</Nav.Link>
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://covid19.healthdata.org/united-states-of-america">IHME Covid Info</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.fda.gov/">FDA.gov</NavDropdown.Item>
                        <NavDropdown.Item href="https://thehealthymuse.com/">The Healthy Muse</NavDropdown.Item>
                        <NavDropdown.Item href="https://outofpocket.substack.com/about">Out-of-Pocket: Healthcare, but funny</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
