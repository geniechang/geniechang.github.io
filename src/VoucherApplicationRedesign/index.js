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

import "./index.css";

export default function VoucherApplicationRedesign() {
  return (
    <>
      <div className="VoucherApplicationRedesign VoucherApplicationRedesign-cover">
        <Container style={{ padding: "100px 0 150px 0" }}>
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
              <img src={cover} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1
                style={{
                  padding: "100px 0 30px 0",
                  textAlign: "center",
                }}
              >
                Overview
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} style={{ flexDirection: "column" }}>
              <h4>Goal</h4>
              <p style={{ marginBottom: 45 }}>Voucher Application Redesign</p>
              <h4>Industry</h4>
              <p>Online Retailing</p>
            </Col>
            <Col xs={12} md={8}>
              <p>
                <b>
                  The goal of this project is to redesign the voucher
                  application flow for online retailing app Zalora.
                </b>
              </p>
              <h4>Problem</h4>
              <p>
                The platform always has several different promotion going at the
                same period of time. Users have to enter the voucher code one by
                one to compare between different promotion codes, which is time
                comsuming and irritating.
              </p>
              <h4>Redesign Plan</h4>
              <p>
                Design a voucher comparison page for user, so they can:
                <ul>
                  <li>compare all vouchers at once</li>
                  <li>see how much saved with the voucher</li>
                  <li>
                    see which item is applicable with the voucher, and which is
                    not
                  </li>
                  <li>get suggestions on how to save more with the voucher</li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingTop: 100, paddingBottom: 20 }}>
              <h1>Flow Chart</h1>
              <p>voucher application</p>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col sm={6}>
              <img src={originalFlow} style={{ width: "100%" }} />
              <h4 style={{ color: "#fff", margin: "60px 0 32px 0" }}>
                Original Flow
              </h4>
              <p>
                The original flow requires the user to enter the voucher code
                one by one, apply to their shopping cart, memories the result
                and compare by users themselves.
              </p>
            </Col>
            <Col sm={6}>
              <img src={redesignedFlow} style={{ width: "100%" }} />
              <h4 style={{ color: "#fff", margin: "60px 0 32px 0" }}>
                Redesigned Flow
              </h4>
              <p>
                The redesigned flow allows user to enter the voucher code
                manually, or use the “compare voucher” function where the app
                list all the avaliable voucher and sort by the result.
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingTop: 100, paddingBottom: 100 }}>
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
              <h4>Iconography</h4>
              <img src={typography02} style={{ width: "100%" }} />
            </Col>
            <Col md={4} style={{ marginBottom: 100 }}>
              <img src={typography03} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Buttons</h4>
            </Col>
          </Row>
          <Row>
            <Col md={8} style={{ marginBottom: 100 }}>
              <img src={buttons} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <Col md={4} style={{ marginBottom: 100 }}>
              <h4 style={{ marginBottom: 32 }}>Colors</h4>
              <img src={colors} style={{ width: "100%" }} />
            </Col>
            <Col md={4} style={{ marginBottom: 100 }}>
              <h4 style={{ marginBottom: 32 }}>Iconography</h4>
              <img src={iconography} style={{ width: "100%" }} />
            </Col>
            <Col md={4} style={{ marginBottom: 100 }}>
              <h4 style={{ marginBottom: 32 }}>Shadows</h4>
              <img src={shadows} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="VoucherApplicationRedesign VoucherApplicationRedesign-cover">
        <img
          src={wave}
          style={{ marginTop: -1, transform: "rotate(180deg)", width: "100%" }}
        />
        <Container>
          <Row style={{ marginTop: 60 }}>
            <Col>
              <h1 style={{ textAlign: "center" }}>High-Fidelity Prototype</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
