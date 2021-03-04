import React from 'react';
import './Home.sass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Badge from 'react-bootstrap/Badge'
import Sidebar from '../sidebar/Sidebar';
import { gamesObj } from '../../data/gamesObj.js';


const Home = () => {

const psUrl = "https://techcrunch.com/wp-content/uploads/2017/06/playstation-logo.jpg";
const xboxUrl = "https://media.comicbook.com/2019/02/xbox-logo-1159774.jpeg";
const pcUrl = "https://wallpapercave.com/wp/rfZBh9V.png";
console.log(gamesObj)

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={2}>
                        <Row>
                            <Sidebar />
                        </Row>
                    </Col>
                    <Col lg={10}>
                        <Row>
                            <span className="header">
                                Cross-platform games
                            </span>
                        </Row>
                        <Row>
                            <div className="search-text">
                                Search by platform combination
                            </div>
                            <br></br>
                        </Row>
                        <Row>
                            <Col xl="auto" lg={5}>
                                <Card className="card-main" tabIndex="0">
                                    <Card.Img variant="top" src={psUrl} className="image" />
                                    <Card.Body>
                                        <FormControlLabel
                                            control={<Checkbox name="checkedA" />}
                                            label="PlayStation"
                                        />
                                        <div>
                                            <Badge variant="secondary"># Games: 34</Badge>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl="auto" lg={4}>
                                <Card className="card-main" tabIndex="0">
                                    <Card.Img variant="top" src={xboxUrl} className="image" />
                                    <Card.Body>
                                        <FormControlLabel
                                            control={<Checkbox name="checkedA" />}
                                            label="Xbox"
                                        />
                                        <div>
                                            <Badge variant="secondary"># Games: 34</Badge>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl="auto" lg={6}>
                                <Card className="card-main" tabIndex="0">
                                    <Card.Img variant="top" src={pcUrl} className="image" />
                                    <Card.Body>
                                        <FormControlLabel
                                            control={<Checkbox name="checkedA" />}
                                            label="PC"
                                        />
                                        <div>
                                            <Badge variant="secondary"># Games: 34</Badge>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <div className="button-container">
                                <Button variant="light">Find games</Button>
                            </div>
                        </Row>
                        <Row>
                            <div className="featured-text">
                                Featured
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
