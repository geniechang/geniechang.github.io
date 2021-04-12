import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import wave from "../Wave.svg";
import appFlow from "./app_flow.png";
import cover from "./cover.svg";
import incidentFlow from "./incident_flow.svg";
import journeyMap from "./journey_map.png";
import persona from "./persona.svg";

import "./index.css";

export default function IncidentTrackingApp() {
  return (
    <>
      <div className="IncidentTrackingApp-cover">
        <Container style={{ padding: "100px 0 150px 0" }}>
          <Row>
            <Col xs={12} md={6} style={{ flexDirection: "column" }}>
              <h1 style={{ fontSize: "3.5em", paddingTop: "0.6em" }}>
                Incident Tracking Application
              </h1>
              <div style={{ padding: "30px 0" }}>
                <Badge pill variant="primary" className="IncidentTrackingApp-badge">UX</Badge>{" "}
                <Badge pill variant="primary" className="IncidentTrackingApp-badge">UI</Badge>{" "}
                <Badge pill variant="primary" className="IncidentTrackingApp-badge">Tablet App</Badge>
              </div>
            </Col>
            <Col>
              <img src={cover} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
        <img src={wave} style={{ width: "100%" }} />
      </div>
      <div style={{ background: "#ffffff" }}>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1 style={{ textAlign: "center", padding: "100px 0 50px 0" }}>Overview</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs md={8} lg={6}>
              <p style={{ textAlign: "center" }}>
                The goal of this project is to design an application for boiler users in manufacturing industry to have better control over the machine they are using on daily basis.
                The design process shown here, particularly focus on the incident pages.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#ffffff" }}>
        <Container>
          <Row>
            <Col>
              <h1 style={{ padding: "100px 0 50px 0" }}>Research</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} lg={3} style={{ flexDirection: "column" }}>
              <h4>Method</h4>
              <p>User Interview</p>
              <h4>Participants</h4>
              <p>6 Boilermen</p>
            </Col>
            <Col xs={12} md={8} lg={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Non imperdiet amet, quis odio gravida sed. Etiam a eu enim amet pellentesque ac.
                Hac lobortis aenean massa aliquam sed morbi orci, a. Id nunc, neque habitant fermentum.
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "100px 0 20px 0" }}>
              <h1 style={{ textAlign: "end" }}>Persona</h1>
            </Col>
          </Row>
          <Row>
            <img src={persona} style={{ width: "100%" }} />
          </Row>
          <Row>
            <Col style={{ alignItems: "baseline", display: "flex", justifyContent: "space-between", padding: "100px 0 20px 0" }}>
              <h1>Journey Map</h1>
              <h2><b>Sean’s</b> Daily Routine</h2>
            </Col>
          </Row>
          <Row>
            <img src={journeyMap} style={{ width: "100%" }} />
          </Row>
        </Container>
      </div>
      <div className="IncidentTrackingApp-flowchart">
        <img src={wave} style={{ marginTop: -1, transform: "rotate(180deg", width: "100%" }} />
        <Container style={{ padding: "100px 0 150px 0" }}>
          <Row>
            <Col style={{ padding: "100px 0 20px 0" }}>
              <h1>Flowchart</h1>
              <h2>App Flow</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={8}>
              <img src={appFlow} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "100px 0 20px 0" }}>
              <h2>Incident Flow</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={8}>
              <img src={incidentFlow} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
        <img src={wave} style={{ width: "100%" }} />
      </div>
      <div style={{ background: "#ffffff" }}>
        <Container>
          <Row>
            <Col>
              <h1 style={{ padding: "100px 0 50px 0" }}>Low-Fidelity Prototype</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: 500 }} />
    </>
  );
}
