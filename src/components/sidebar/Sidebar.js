import React from 'react';
import './Sidebar.sass';
import ListGroup from 'react-bootstrap/ListGroup';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="side-big-text">
                Home
            </div>
            <div className="side-big-text">
                All Games
            </div>
            <div>
                <span className="side-big-text-no">
                    Platforms
                </span>
                <ListGroup variant="flush">
                    <ListGroup.Item className="sidebar-list-item">PC</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">PlayStation</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">Xbox</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <span className="side-big-text-no">
                    Genre
                </span>
                <ListGroup variant="flush">
                    <ListGroup.Item className="sidebar-list-item">Action</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">Adventure</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">Puzzle</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">Racing</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">RPG</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">Shooter</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">Sports</ListGroup.Item>
                    <ListGroup.Item className="sidebar-list-item">Strategy</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}

export default Sidebar;