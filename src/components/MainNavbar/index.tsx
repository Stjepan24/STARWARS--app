import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { INavbar } from '../../helpers/interfaces/INavbar';

const MainNavbar = (props: INavbar): JSX.Element => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    {props.specieName && (
                        <img
                            alt=""
                            src={require('../../assets/images/' + props.specieName.toLowerCase() + '.jpeg')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                        />
                    )}
                    {props.userName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/species/human'} className="nav-link">
                            Human
                        </Link>
                        <Link to={'/species/droid'} className="nav-link">
                            Droid
                        </Link>
                        <Link to={'/species/wookie'} className="nav-link">
                            Wookie
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to={'/'} className="nav-link">
                            Logout
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;
