import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import wave from "../Wave.svg";
import appFlow from "./app_flow.png";
import cover from "./cover.svg";
import flowChart from "./flow_chart.svg";
import journeyMap from "./journey_map.svg";
import lowFidelityPrototype from "./low_fidelity_prototype.svg";
import incidentReport from "./incident_report.svg";
import incidentTicket from "./incident_ticket.svg";
import troubleshooting from "./troubleshooting.svg";
import generalReport from "./general_report.svg";
import persona from "./persona.svg";

import "./index.css";

export default function IncidentTrackingApp() {
  return (
    <>
      <div className="IncidentTrackingApp IncidentTrackingApp-cover">
        <Container style={{ paddingTop: 100, paddingBottom: 150 }}>
          <Row>
            <Col>
              <h1
                style={{
                  fontSize: "4em",
                  fontWeight: 700,
                  lineHeight: "1.4em",
                  paddingTop: "0.6em",
                }}
              >
                Incident Management
                <br />
                Application
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ padding: "30px 0" }}>
                <Badge
                  pill
                  variant="primary"
                  className="IncidentTrackingApp-badge"
                >
                  UX
                </Badge>
                <Badge
                  pill
                  variant="primary"
                  className="IncidentTrackingApp-badge"
                >
                  UI
                </Badge>
                <Badge
                  pill
                  variant="primary"
                  className="IncidentTrackingApp-badge"
                >
                  Tablet App
                </Badge>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <img src={cover} style={{ paddingTop: 30, width: "100%" }} />
            </Col>
          </Row>
        </Container>
        <img src={wave} style={{ width: "100%" }} />
      </div>
      <div className="IncidentTrackingApp" style={{ background: "#ffffff" }}>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1 style={{ textAlign: "center", padding: "100px 0 50px 0" }}>
                Overview
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
              <p style={{ textAlign: "center" }}>
                The goal of this project is to design an application to manage
                machineries that are often used in traditional industries. This
                project mainly focuses on the incident response lifecycle. It
                helps the users to communicate more efficiently and manage time
                better.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 style={{ padding: "100px 0 50px 0" }}>Research</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} lg={3} style={{ flexDirection: "column" }}>
              <Row>
                <Col xs={6} md={12}>
                  <h4>Method</h4>
                  <p>User Interview</p>
                </Col>
                <Col xs={6} md={12}>
                  <h4>Participants</h4>
                  <p>6 Boilermen</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <p style={{ marginBottom: 0 }}>
                The qualitative research method is used to:
              </p>
              <ul>
                <li>gather in-depth insights</li>
                <li>observe user behavior patterns</li>
                <li>understand pain points from the users</li>
              </ul>
              <p>
                The data is collected through interviews with six boilermen who
                have worked as boilermen in the same environment for more than 6
                months. The data is then analyzed and used to create a persona
                and journey map for this project.
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingTop: 100, paddingBottom: 20 }}>
              <h1 style={{ textAlign: "end" }}>Persona</h1>
            </Col>
          </Row>
          <Row>
            <img src={persona} style={{ width: "100%" }} />
          </Row>
          <Row>
            <Col
              style={{
                alignItems: "baseline",
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 100,
                paddingBottom: 20,
              }}
            >
              <h1>Journey Map</h1>
              <h4 style={{ fontWeight: 400 }}>
                <b>Sean’s</b> Daily Routine
              </h4>
            </Col>
          </Row>
          <Row>
            <img src={journeyMap} style={{ width: "100%" }} />
          </Row>
        </Container>
      </div>
      <div className="IncidentTrackingApp IncidentTrackingApp-flowchart">
        <img
          src={wave}
          style={{ marginTop: -1, transform: "rotate(180deg)", width: "100%" }}
        />
        <Container style={{ paddingTop: 100, paddingBottom: 150 }}>
          <Row>
            <Col style={{ paddingTop: 100, paddingBottom: 20 }}>
              <h1>Flowchart</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={flowChart} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
        <img src={wave} style={{ width: "100%" }} />
      </div>
      <div className="IncidentTrackingApp" style={{ background: "#ffffff" }}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: 100,
                paddingBottom: 50,
              }}
            >
              <h1>Low-Fidelity Prototype</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={lowFidelityPrototype} style={{ width: "100%" }} />
            </Col>
          </Row>
          {/* TODO
          <Row
            style={{
              paddingTop: 200,
              paddingBottom: 50,
            }}
          >
            <Col>
              <h1>UI Style</h1>
            </Col>
          </Row> */}
          <Row
            style={{
              paddingTop: 200,
              paddingBottom: 100,
            }}
          >
            <Col
              sm={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h1>
                High-Fidelity
                <br />
                Prototype
              </h1>
              <div>
                <img src={troubleshooting} style={{ width: "100%" }} />
                <img src={generalReport} style={{ width: "100%" }} />
              </div>
            </Col>
            <Col sm={6}>
              <img src={incidentTicket} style={{ width: "100%" }} />
              <img src={incidentReport} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
