import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal'
import { FiSearch } from 'react-icons/fi';
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { RiWindowsFill } from 'react-icons/ri';
import './Topbar.sass';


const ForJo = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            For Jo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                Jo is my beautiful, amazing, gamer girlfriend. She always watches my streams (even though they're practically the same thing every time), which is something I appreciate very much. She supports me even when I'm losing, and is somehow always interested even when I talk about my longest headshot record or whatever.
            </p>
            <p>
                As a result, this is one way I'd like to express my gratitude towards her. We enjoy playing games together, but we don't have the same gaming platforms, so it's always a struggle for us to find games that we can play together. Hopefully this app can help you connect and play with your Jo, because we all need a Jo in our lives.
            </p>
            <p>
                P.S. Check out her <a className="twitch-link" target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/princezujo">Twitch</a>
            </p>
        </Modal.Body>
      </Modal>
    );
}

const Topbar = () => {

    const [modalShow, setModalShow] = React.useState(false);

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
                <Nav.Link className="jo ml-auto" onClick={() => setModalShow(true)}>For Jo</Nav.Link>
            </Nav>
            <ForJo
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Navbar>
    );
}

export default Topbar;