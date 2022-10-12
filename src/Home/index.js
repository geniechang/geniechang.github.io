import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import incidentTrackingAppCover from "../IncidentTrackingApp/cover.svg";
import genie from "./genie.svg";
import about from "./about.svg";
import wave from "../Wave.svg";
import aboutSmiley from "./about-smiley.svg";
import clip5 from "./clip5.mp4";
import irrCover from "./irr-cover.png";

import "./index.css";

export default function Home() {
  return (
    <>
      <div className="Home Home-container">
        <Container style={{ paddingTop: 100, paddingBottom: 150 }}>
          <Row>
            <Col
              className="justify-content-end"
              style={{ display: "flex", marginBottom: 36 }}
            >
              <h1 className="Home-blue-color" style={{ fontSize: 30 }}>
                Good design is invisible, just like magic
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-end" style={{ display: "flex" }}>
              <h1 className="Home-blue-color" style={{ fontSize: "2.8em" }}>
                Make the magic of design happen
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={{ order: "last" }} md={{ span: 6, order: "first" }}>
              {/* TODO: split the image into 2, and make the wave responsive */}
              <img className="Home-genie" src={genie} />
            </Col>
            <Col xs={12} md={6}>
              <h1
                className="Home-blue-color"
                style={{
                  fontSize: "3.5em",
                  fontWeight: 300,
                  paddingTop: "0.6em",
                }}
              >
                Hello, I am Genie
              </h1>
              <div
                className="justify-content-end"
                style={{ display: "flex", marginTop: 46 }}
              >
                <Button
                  href="./GenieChang-CV.pdf"
                  target="_blank"
                  size="lg"
                  variant="warning"
                  style={{
                    borderRadius: 32,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  DOWNLOAD CV
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={wave} style={{ width: "100%" }} />
      </div>
      <div className="Home Home-projects" style={{ background: "#ffffff" }}>
        <Container>
          <Row>
            <Col>
              <h1
                id="projects"
                style={{
                  paddingTop: 100,
                  paddingBottom: 100,
                }}
              >
                Projects
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={4} style={{ paddingLeft: 30, paddingRight: 30 }}>
              <LinkContainer
                to="/projects/its-raining-raincoat-redesign"
                className="xxx"
                style={{ cursor: "pointer", width: "100%" }}
              >
                <img src={irrCover} alt="" style={{ width: "100%" }} />
              </LinkContainer>
            </Col>
            <Col style={{ paddingLeft: 30, paddingRight: 30 }}>
              <h4>
                Design to break barriers between migrant workers and residents
                of Singapore
              </h4>
              <Badge pill bg="warning" className="Home-badge">
                UX/UI
              </Badge>{" "}
              <Badge pill bg="warning" className="Home-badge">
                Redesign
              </Badge>{" "}
              <Badge pill bg="warning" className="Home-badge">
                Android
              </Badge>
              <p>
                In this project, we were challenged to review, assess and
                recommend how to make ItsRainingRaincoats'(IRR) online
                experiences more engaging, impactful, and usable for their
                audiences.
              </p>
              <LinkContainer to="/projects/its-raining-raincoat-redesign">
                <Button variant="link" className="Home-projects-more">
                  Read More
                </Button>
              </LinkContainer>
            </Col>
          </Row>
          <Row className="Home-about">
            <Col
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 id="about" style={{ paddingTop: 100, paddingBottom: 50 }}>
                About
              </h1>
              <img src={about} style={{ width: 300 }} />
              <h1 style={{ color: "#ff9f40", marginTop: 40, marginBottom: 60 }}>
                Hi!
              </h1>
              <p>
                I am a user interface and user experience designer who currently
                lives in Singapore. <br />I am hungry to learn everything that
                makes me a better designer, and also hungry to eat all the yummy
                food out there that I am yet to try. <br />
              </p>
              <p style={{ marginTop: 24, marginBottom: 60 }}>
                Hope you like my work, please feel free to get in touch with me.
              </p>
              <img src={aboutSmiley} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
