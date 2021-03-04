import React from 'react';
import './Sidebar.sass';
import ListGroup from 'react-bootstrap/ListGroup';

const Sidebar = () => {

    const categories = ['Action', 'Adventure', 'Puzzle', 'Racing', 'RPG', 'Shooter', 'Sports', 'Strategy'];
    const platforms = ['PC', 'PlayStation', 'Xbox'];

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
                    {platforms.map((platform, index) => 
                        <ListGroup.Item key={index} className="sidebar-list-item">{platform}</ListGroup.Item>
                    )}
                </ListGroup>
            </div>
            <div>
                <span className="side-big-text-no">
                    Genre
                </span>
                <ListGroup variant="flush">
                    {categories.map((category, index) => 
                        <ListGroup.Item key={index} className="sidebar-list-item">{category}</ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        </div>
    );
}

export default Sidebar;