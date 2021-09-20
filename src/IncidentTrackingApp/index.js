import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import wave from "../Wave.svg";
import appFlow from "./app_flow.png";
import cover from "./cover.svg";
import flowChart from "./flow_chart.svg";
import journeyMap from "./journey_map.svg";
import lowFidelityPrototype from "./low_fidelity_prototype.svg";
import incidentReport from "./incident_report.svg";
import incidentReportArrow from "./incident_report_arrow.svg";
import incidentTicket from "./incident_ticket.svg";
import incidentTicketArrow from "./incident_ticket_arrow.svg";
import troubleshooting from "./troubleshooting.svg";
import troubleshootingArrow from "./troubleshooting_arrow.svg";
import generalReport from "./general_report.svg";
import generalReportArrow from "./general_report_arrow.svg";
import uiColourBase from "./ui_colour_base.svg";
import uiColourBright from "./ui_colour_bright.svg";
import uiColourNeutral from "./ui_colour_neutral.svg";
import uiColourSoft from "./ui_colour_soft.svg";
import uiIconography from "./ui_iconography.svg";
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
          <Row style={{ marginTop: 200, marginBottom: 20 }}>
            <Col>
              <h1>Research</h1>
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
              <p>The goal of this research is to find out</p>
              <ul>
                <li>how do the daily routines of the users look like?</li>
                <li>
                  how long does it take for the users to find out about an
                  incident?
                </li>
                <li>how do the users respond to an incident?</li>
                <li>how do the users resolve an incident?</li>
              </ul>
              <p>
                Since most of the boiler users are small to medium businesses, a
                boiler company helped me to find six boilermen who work in small
                to medium businesses to conduct the research. The data is
                subsequently analysed and used to create a persona and journey
                map for this project.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 200, marginBottom: 20 }}>
            <Col>
              <h1 style={{ textAlign: "end" }}>Persona</h1>
            </Col>
          </Row>
          <Row>
            <img src={persona} style={{ width: "100%" }} />
          </Row>
          <Row style={{ marginTop: 200, marginBottom: 20 }}>
            <Col
              style={{
                alignItems: "baseline",
                display: "flex",
                justifyContent: "space-between",
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
          <Row style={{ marginTop: 250, marginBottom: 100 }}>
            <Col>
              <h1>Incident Flowchart</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={flowChart} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row style={{ marginTop: 250, marginBottom: 40 }}>
            <Col lg={8} className="IncidentTrackingApp-lofi-col">
              <h1>Low-Fidelity Prototype</h1>
              <p>
                I built this low-fidelity prototype to explore the incident
                management flow and get feedback from others. Therefore, the
                usability of the flow can be quickly experimented with and
                iterated.
              </p>
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
          <Row>
            <Col>
              <h4>Colours</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img
                src={uiColourBase}
                style={{ width: "80%", marginLeft: "-2.5%", marginBottom: 50 }}
              />
            </Col>
            <Col lg={6}>
              <img
                src={uiColourNeutral}
                style={{ width: "100%", marginLeft: "-2.5%", marginBottom: 50 }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img
                src={uiColourBright}
                style={{ width: "80%", marginLeft: "-2.5%", marginBottom: 50 }}
              />
            </Col>
            <Col lg={6}>
              <img
                src={uiColourSoft}
                style={{ width: "80%", marginLeft: "-2.5%", marginBottom: 50 }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: 100 }}>
            <Col>
              <h4>Iconography</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={uiIconography} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 200,
              marginBottom: 64,
            }}
          >
            <Col>
              <h1>High-Fidelity Prototype</h1>
            </Col>
          </Row>
          <Row className="IncidentTrackingApp-hifi-row">
            <Col md={6}>
              <div style={{ position: "relative" }}>
                <img src={incidentTicket} />
                <img
                  src={incidentTicketArrow}
                  style={{
                    width: "30%",
                    position: "absolute",
                    top: "14.5%",
                    right: "-23.2%",
                  }}
                />
              </div>
              <p style={{ marginTop: 50, paddingRight: "20%" }}>
                With the troubleshooting assistant, the technicians are able to
                start troubleshooting immediately without having to look back to
                the paper manual.
              </p>
              <div style={{ position: "relative", marginTop: 50 }}>
                <img src={generalReport} />
                <img
                  src={generalReportArrow}
                  style={{
                    width: "15%",
                    position: "absolute",
                    bottom: "-13%",
                    right: "3%",
                  }}
                />
              </div>
              <p style={{ marginTop: 50, paddingRight: "20%" }}>
                The report generator collects and processes all the data from
                the incident, which helps technicians to create a report with
                just a few taps.
              </p>
              <p style={{ marginTop: 50, paddingRight: "20%" }}>
                The incident report provides a retrospective view of the
                incident, with timelines, graphs and charts to help identify
                trends and detect anomalies.
              </p>
            </Col>
            <Col md={6}>
              <p style={{ marginTop: 50, paddingLeft: "20%" }}>
                The buttons on the timeline allow the technicians to easily
                update their status with little hassle. Therefore, more timely
                updates can be sent out to other people.
              </p>
              <div style={{ position: "relative" }}>
                <img src={troubleshooting} style={{ marginTop: 50 }} />
                <img
                  src={troubleshootingArrow}
                  style={{
                    width: "40%",
                    position: "absolute",
                    left: "-25%",
                    bottom: "31%",
                  }}
                />
              </div>
              <div style={{ position: "relative" }}>
                <img src={incidentReport} />
                <img
                  src={incidentReportArrow}
                  style={{
                    width: "28%",
                    position: "absolute",
                    left: "-24%",
                    bottom: "0%",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
