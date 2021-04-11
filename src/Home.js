import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import genie from "./genie.svg";
import logo from "./logo.svg";
import wave from './Wave.svg';

import "./Home.css";

function Home() {
  return (
    <>
      <div className="Home-container">
        <Container style={{ padding: "100px 0 150px 0" }}>
          <Row>
            <Col className="justify-content-end" style={{ display: "flex" }}>
              <h1 className="Home-white-color" style={{ fontSize: "2.8em" }}>Make the magic of design happen</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={{ order: 'last' }} lg={{ span: 6, order: 'first' }}>
              {/* TODO: split the image into 2, and make the wave responsive */}
              <img className="Home-genie" src={genie} />
            </Col>
            <Col xs={12} lg={6} className="justify-content-end" style={{ display: "flex" }}>
              <h1 className="Home-white-color" style={{ fontSize: "3.5em", paddingTop: "0.6em" }}>Hello, I am Genie</h1>
            </Col>
          </Row>
        </Container>
        <img src={wave} style={{ width: "100%" }} />
      </div>
      <div style={{ background: "#ffffff" }}>
        <Container>
          <Row>
            <Col className="justify-content-center" style={{ display: "flex" }}>
              <h1 style={{ padding: "100px 0 50px 0" }}>Projects</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                  <Card.Title>Project Name</Card.Title>
                  <Card.Text>
                    <Badge variant="primary">UX</Badge>{" "}
                    <Badge variant="primary">UI</Badge>{" "}
                    <Badge variant="primary">Tablet App</Badge>
                    <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis dignissim ornare consequat egestas quis odio at faucibus etiam. Vel a auctor et dignissim commodo et pretium a morbi. Posuere tellus sit proin eget. Suspendisse id diam a quisque tristique etiam morbi.
              </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                  <Card.Title>Project Name</Card.Title>
                  <Card.Text>
                    <Badge variant="primary">UI</Badge>{" "}
                    <Badge variant="primary">Mobile App</Badge>
                    <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis dignissim ornare consequat egestas quis odio at faucibus etiam. Vel a auctor et dignissim commodo et pretium a morbi. Posuere tellus sit proin eget. Suspendisse id diam a quisque tristique etiam morbi.
              </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <h1 className="Home-white-color">About</h1>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
