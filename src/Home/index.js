import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import incidentTrackingAppCover from "../IncidentTrackingApp/cover.svg";
import genie from "./genie.svg";
import about from "./about.svg";
import wave from "../Wave.svg";
import aboutSmiley from "./about-smiley.svg";
import clip5 from "./clip5.mp4";

import "./index.css";

export default function Home() {
  return (
    <>
      <div className="Home Home-container">
        <Container style={{ paddingTop: 100, paddingBottom: 150 }}>
          <Row>
            <Col className="justify-content-end" style={{ display: "flex" }}>
              <h1 className="Home-white-color" style={{ fontSize: "2.8em" }}>
                Make the magic of design happen
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={{ order: "last" }} md={{ span: 6, order: "first" }}>
              {/* TODO: split the image into 2, and make the wave responsive */}
              <img className="Home-genie" src={genie} />
            </Col>
            <Col
              xs={12}
              md={6}
              className="justify-content-end"
              style={{ display: "flex" }}
            >
              <h1
                className="Home-white-color"
                style={{ fontSize: "3.5em", paddingTop: "0.6em" }}
              >
                Hello, I am Genie
              </h1>
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
                to="/projects/incident-tracking-app"
                className="xxx"
                style={{ cursor: "pointer", width: "100%" }}
              >
                <img src={incidentTrackingAppCover} style={{ width: "100%" }} />
              </LinkContainer>
            </Col>
            <Col style={{ paddingLeft: 30, paddingRight: 30 }}>
              <h4>Incident Management Application</h4>
              <Badge pill variant="primary" className="Home-badge">
                UX
              </Badge>{" "}
              <Badge pill variant="primary" className="Home-badge">
                UI
              </Badge>{" "}
              <Badge pill variant="primary" className="Home-badge">
                Tablet App
              </Badge>
              <p>
                The goal of this project is to design an application to manage
                machineries that are often used in traditional industries. This
                project mainly focuses on the incident response lifecycle.
              </p>
              <LinkContainer to="/projects/incident-tracking-app">
                <Button variant="link" className="Home-projects-more">
                  Read More
                </Button>
              </LinkContainer>
            </Col>
          </Row>
          <Row style={{ marginTop: 150 }}>
            <Col
              lg={4}
              style={{ paddingLeft: 30, paddingRight: 30, textAlign: "center" }}
            >
              <LinkContainer
                to="/projects/voucher-application-redesign"
                style={{ cursor: "pointer", width: "84%" }}
              >
                <video autoPlay loop muted>
                  <source src={clip5} type="video/mp4" />
                </video>
              </LinkContainer>
            </Col>
            <Col style={{ paddingLeft: 30, paddingRight: 30 }}>
              <h4>Voucher Application Redesign</h4>
              <Badge pill variant="primary" className="Home-badge">
                UI
              </Badge>{" "}
              <Badge pill variant="primary" className="Home-badge">
                Tablet App
              </Badge>
              <p>
                Online retailing platform Zalora often provides an overwhelming
                amount of vouchers for their users to choose from during
                checkout. The redesign helps their users to quickly take the
                best pick among them, which removes the frustration from the
                checkout experience.
              </p>
              <LinkContainer to="/projects/voucher-application-redesign">
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
