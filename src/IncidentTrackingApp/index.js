import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import wave from "../Wave.svg";
import appFlow from "./app_flow.png";
import cover from "./cover.svg";
import flowChart from "./flow_chart.svg";
import journeyMap from "./journey_map.png";
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
            <Col xs={12} md={7} style={{ flexDirection: "column" }}>
              <h1
                style={{
                  fontSize: "4em",
                  fontWeight: 700,
                  lineHeight: "1.4em",
                  paddingTop: "0.6em",
                }}
              >
                Incident Management Application
              </h1>
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
            <Col>
              <img src={cover} style={{ width: "100%" }} />
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
                The goal of this project is to design an application for boiler
                users in manufacturing industry to have better control over the
                machine they are using on daily basis. The design process shown
                here, particularly focus on the incident pages.
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
              <h4>Method</h4>
              <p>User Interview</p>
              <h4>Participants</h4>
              <p>6 Boilermen</p>
            </Col>
            <Col xs={12} md={8} lg={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                imperdiet amet, quis odio gravida sed. Etiam a eu enim amet
                pellentesque ac. Hac lobortis aenean massa aliquam sed morbi
                orci, a. Id nunc, neque habitant fermentum.
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
              <h4>
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
              <h1>Flow Chart</h1>
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
          <Row
            style={{
              paddingTop: 200,
              paddingBottom: 50,
            }}
          >
            <Col>
              <h1>UI Style</h1>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: 200,
              paddingBottom: 100,
            }}
          >
            <Col sm={6}>
              <h1
                style={{
                  paddingBottom: 100,
                }}
              >
                High-Fidelity
                <br />
                Prototype
              </h1>
              <img src={troubleshooting} style={{ width: "100%" }} />
              <img src={generalReport} style={{ width: "100%" }} />
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
