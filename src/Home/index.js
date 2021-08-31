import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import incidentTrackingAppCover from "../IncidentTrackingApp/cover.svg";
import genie from "./genie.svg";
import logo from "./logo.svg";
import wave from "../Wave.svg";

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
      <div className="Home" style={{ background: "#ffffff" }}>
        <Container>
          <Row>
            <Col className="justify-content-center" style={{ display: "flex" }}>
              <h1 id="projects" style={{ paddingTop: 100, paddingBottom: 100 }}>
                Projects
              </h1>
            </Col>
          </Row>
          <LinkContainer
            to="/projects/incident-tracking-app"
            style={{ cursor: "pointer" }}
          >
            <Row>
              <Col lg={4} style={{ paddingLeft: 30, paddingRight: 30 }}>
                <img src={incidentTrackingAppCover} style={{ width: "100%" }} />
              </Col>
              <Col style={{ paddingLeft: 30, paddingRight: 30 }}>
                <h4 className="Home-project-h4">
                  Incident Tracking Application
                </h4>
                <Badge pill variant="primary" className="Home-badge">
                  UX
                </Badge>{" "}
                <Badge pill variant="primary" className="Home-badge">
                  UI
                </Badge>{" "}
                <Badge pill variant="primary" className="Home-badge">
                  Tablet App
                </Badge>
                <p className="Home-project-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  dignissim ornare consequat egestas quis odio at faucibus
                  etiam. Vel a auctor et dignissim commodo et pretium a morbi.
                  Posuere tellus sit proin eget. Suspendisse id diam a quisque
                  tristique etiam morbi.
                </p>
              </Col>
            </Row>
          </LinkContainer>
          <LinkContainer
            to="/projects/voucher-application-redesign"
            style={{ cursor: "pointer", marginTop: 150 }}
          >
            <Row>
              <Col lg={4} style={{ paddingLeft: 30, paddingRight: 30 }}>
                <img src={logo} style={{ width: "100%" }} />
              </Col>
              <Col style={{ paddingLeft: 30, paddingRight: 30 }}>
                <h4 className="Home-project-h4">
                  Voucher Application Redesign
                </h4>
                <Badge pill variant="primary" className="Home-badge">
                  UI
                </Badge>{" "}
                <Badge pill variant="primary" className="Home-badge">
                  Tablet App
                </Badge>
                <p className="Home-project-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  dignissim ornare consequat egestas quis odio at faucibus
                  etiam. Vel a auctor et dignissim commodo et pretium a morbi.
                  Posuere tellus sit proin eget. Suspendisse id diam a quisque
                  tristique etiam morbi.
                </p>
              </Col>
            </Row>
          </LinkContainer>
          <Row className="justify-content-center">
            <h1 id="about" style={{ padding: "100px 0 50px 0" }}>
              About
            </h1>
          </Row>
          <div style={{ height: 500 }} />
        </Container>
      </div>
    </>
  );
}
