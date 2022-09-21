import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const header = (props) =>{
    return(
        <Navbar collapseOnSelect expand="md" variant="dark" style={{backgroundColor: '#1a6c4b'}}>
            <Navbar.Brand>
                <div className='header-container'> <Nav.Link as={NavLink} to='/' exact>
                    <input type="button" onClick={props.fetchNotes} className='header-container .header-logo' value="Notes"/>
                </Nav.Link></div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to='/tags' exact>
                        <input type="button" className="button-field manage-tags-button" value="Manage Tags"/></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default header;
