import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import wave from "../Wave.svg";
import cover from "./cover.svg";
import originalFlow from "./original_flow.svg";
import redesignedFlow from "./redesigned_flow.svg";
import lowFidelityPrototype from "./low_fidelity_prototype.svg";
import typography01 from "./typography_01.svg";
import typography02 from "./typography_02.svg";
import typography03 from "./typography_03.svg";
import buttons from "./buttons.svg";
import colors from "./colors.svg";
import iconography from "./iconography.svg";
import shadows from "./shadows.svg";
import clip1 from "./clip1.mp4";
import clip2 from "./clip2.mp4";
import clip3 from "./clip3.mp4";
import clip4 from "./clip4.mp4";

import "./index.css";

export default function VoucherApplicationRedesign() {
  return (
    <>
      <div className="VoucherApplicationRedesign VoucherApplicationRedesign-cover">
        <Container style={{ paddingTop: 100, paddingBottom: 150 }}>
          <Row>
            <Col md={8}>
              <h1
                style={{
                  fontSize: "4em",
                  fontWeight: 700,
                  lineHeight: "1.4em",
                  paddingTop: "0.6em",
                }}
              >
                Voucher Application Redesign
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} style={{ paddingTop: 30 }}>
              <Badge
                pill
                variant="primary"
                className="VoucherApplicationRedesign-badge"
              >
                UI
              </Badge>
              <Badge
                pill
                variant="primary"
                className="VoucherApplicationRedesign-badge"
              >
                Tablet App
              </Badge>
            </Col>
            <Col>
              <img src={cover} style={{ paddingTop: 40, width: "90%" }} />
            </Col>
          </Row>
          <Row style={{ marginTop: 200, marginBottom: 40 }}>
            <Col>
              <h1>Overview</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} style={{ flexDirection: "column" }}>
              <Row>
                <Col xs={6} md={12} style={{ marginBottom: 45 }}>
                  <h4>Goal</h4>
                  <p>Voucher Application Redesign</p>
                </Col>
                <Col xs={6} md={12} style={{ marginBottom: 45 }}>
                  <h4>Industry</h4>
                  <p>Online Retailing</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={8}>
              <h4>Problem</h4>
              <p>
                The platform has always had several different promotions ongoing
                at the same time. Users have to enter the voucher code one by
                one to compare between different voucher codes, which is time
                consuming and irritating.
              </p>
              <h4 style={{ marginTop: 80 }}>Redesign Plan</h4>
              <p>
                Design a voucher comparison page for users, so that they can:
              </p>
              <ul>
                <li>compare all the vouchers at once</li>
                <li>see how much is being saved with the voucher</li>
                <li>
                  see which items are applicable with the voucher, and which are
                  not
                </li>
                <li>get suggestions on how to save more with the vouchers</li>
              </ul>
            </Col>
          </Row>
          <Row style={{ marginTop: 200, marginBottom: 40 }}>
            <Col>
              <h1>Flowchart</h1>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col sm={6} style={{ paddingLeft: 60, paddingRight: 60 }}>
              <img src={originalFlow} style={{ width: "100%" }} />
              <h4 style={{ color: "#fff", margin: "60px 0 32px 0" }}>
                Original Flow
              </h4>
              <p>
                The original flow requires the user to enter the voucher code,
                apply to their shopping cart, memorise the results one by one,
                and compare the discounts by themselves.
              </p>
            </Col>
            <Col sm={6} style={{ paddingLeft: 60, paddingRight: 60 }}>
              <img src={redesignedFlow} style={{ width: "100%" }} />
              <h4 style={{ color: "#fff", margin: "60px 0 32px 0" }}>
                Redesigned Flow
              </h4>
              <p>
                The redesigned flow allows the user to enter the voucher code
                manually, or use the “Compare Vouchers” function to apply the
                best option available.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 200, marginBottom: 40 }}>
            <Col>
              <h1>Low-Fidelity Prototype</h1>
            </Col>
          </Row>
          <Row>
            <img src={lowFidelityPrototype} style={{ width: "100%" }} />
          </Row>
        </Container>
        <img src={wave} style={{ width: "100%" }} />
      </div>
      <div className="VoucherApplicationRedesign">
        <Container>
          <Row>
            <Col>
              <h1 style={{ paddingTop: 100, paddingBottom: 50 }}>UI Style</h1>
              <h4>Typography</h4>
            </Col>
          </Row>
          <Row style={{ paddingTop: 32 }}>
            <Col md={4} style={{ marginBottom: 100 }}>
              <img src={typography01} style={{ width: "100%" }} />
            </Col>
            <Col md={4} style={{ marginBottom: 100 }}>
              <img src={typography02} style={{ width: "100%" }} />
            </Col>
            <Col md={4} style={{ marginBottom: 100 }}>
              <img src={typography03} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <Col md={8} style={{ marginBottom: 100 }}>
              <h4 style={{ marginBottom: 32 }}>Buttons</h4>
              <img src={buttons} style={{ width: "80%", marginLeft: "-1%" }} />
              <h4 style={{ marginTop: 64, marginBottom: 32 }}>Colours</h4>
              <img src={colors} style={{ width: "84%", marginLeft: "-2.2%" }} />
              <p style={{ width: "80%", fontSize: 20, marginTop: 32 }}>
                I have kept two colours of the original Zalora palette as the
                primary ones of this design, since they have a great colour
                contrast ratio and are also visually appealing. I did tone down
                the full black colour that Zalora used, to make it less bright
                to the eyes.
              </p>
            </Col>
            <Col md={4} style={{ marginBottom: 100 }}>
              <h4 style={{ marginBottom: 32 }}>Iconography</h4>
              <img src={iconography} style={{ width: "100%" }} />
              <p style={{ fontSize: 20, marginTop: 32 }}>
                I designed these icons with smooth edges to have brevity and
                clarity that matches the chosen font.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="VoucherApplicationRedesign VoucherApplicationRedesign-cover">
        <img
          src={wave}
          style={{ marginTop: -1, transform: "rotate(180deg)", width: "100%" }}
        />
        <Container style={{ fontSize: 13.33 }}>
          <Row style={{ marginTop: 150, marginBottom: 40 }}>
            <Col>
              <h1 style={{ textAlign: "center" }}>High-Fidelity Prototype</h1>
            </Col>
          </Row>
          <Row style={{ marginTop: 50 }}>
            <Col
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <video autoPlay loop muted style={{ width: "80%" }}>
                <source src={clip1} type="video/mp4" />
              </video>
            </Col>
            <Col
              style={{
                alignItems: "center",
                display: "flex",
                paddingLeft: 50,
                paddingRight: 50,
              }}
            >
              <p>
                Simply tap on Compare Vouchers to get suggestions on all the
                avaliable vouchers
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 50 }}>
            <Col
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <video autoPlay loop muted style={{ width: "80%" }}>
                <source src={clip2} type="video/mp4" />
              </video>
            </Col>
            <Col
              style={{
                alignItems: "center",
                display: "flex",
                paddingLeft: 50,
                paddingRight: 50,
              }}
            >
              <ul>
                <li>Compare all the avaliable vouchers at once</li>
                <li>
                  Get instructions on how to satisfy unmet voucher conditions
                </li>
                <br />
                <li>
                  Add a voucher manually into the list (e.g. birthday voucher)
                  <video autoPlay loop muted style={{ width: "80%" }}>
                    <source src={clip4} type="video/mp4" />
                  </video>
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ marginTop: 50 }}>
            <Col
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 40,
                marginTop: 40,
              }}
            >
              <video autoPlay loop muted style={{ width: "80%" }}>
                <source src={clip3} type="video/mp4" />
              </video>
            </Col>
            <Col
              style={{
                alignItems: "center",
                display: "flex",
                paddingLeft: 50,
                paddingRight: 50,
              }}
            >
              <p>
                Different views to compare between different vouchers. Simply
                tap on Apply to use the voucher after comparison.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
