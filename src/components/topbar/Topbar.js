import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import { FiSearch } from 'react-icons/fi';
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { RiWindowsFill } from 'react-icons/ri';
import './Topbar.sass';

const Topbar = () => {
    return (
        <Navbar className="top-nav">
            <Navbar.Brand href="/" style={{color: "white", fontSize: "24px", fontWeight: "bold"}}>CROSS</Navbar.Brand>
            <Nav className="brand-links">
                <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.playstation.com/en-us/"><FaPlaystation /></Nav.Link>
                <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.xbox.com/en-US/"><FaXbox /></Nav.Link>
                <Nav.Link target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/"><RiWindowsFill /></Nav.Link>
            </Nav>
            <InputGroup className="top-input">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><FiSearch /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Search 56 cross-platform games"
                    aria-label="Search 56 games"
                    className="top-search"
                />
            </InputGroup>
            <Nav className="container-fluid">
                <Nav.Link className="jo ml-auto" target="_blank" rel="noopener noreferrer" href="https://www.playstation.com/en-us/">For Jo</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Topbar;