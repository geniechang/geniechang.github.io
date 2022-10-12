import { Badge, Button, Carousel, Col, Container, Row } from "react-bootstrap";
import avatarDonor from "./avatar-donor.png";
import avatarVolunteer from "./avatar-volunteer.png";
import demo from "./demo.mp4";
import discover1 from "./discover-1.png";
import discover2 from "./discover-2.png";
import discover3 from "./discover-3.png";
import discover4 from "./discover-4.png";
import donorsCurrent from "./donors-current.svg";
import donorsNew from "./donors-new.svg";
import hifiDonor from "./hifi-donor.png";
import hifiVolunteer from "./hifi-volunteer.png";
import hifiWorker from "./hifi-worker.png";
import iconAndroid from "./icon-android.svg";
import iconDb from "./icon-db.svg";
import iconPhone from "./icon-phone.svg";
import iconRecycle from "./icon-recycle.svg";
import migrantWorkersCurrent from "./migrant-workers-current.svg";
import migrantWorkersNew from "./migrant-workers-new.svg";
import volunteersCurrent from "./volunteers-current.svg";
import volunteersNew from "./volunteers-new.svg";
import logo from "./logo.png";
import research1 from "./research-1.png";
import research2 from "./research-2.png";
import research3 from "./research-3.png";
import research4 from "./research-4.png";
import researchFocus from "./research-focus.png";
import researchLearning from "./research-learning.svg";
import styleGuide from "./style-guide.svg";
import userFlowDonor from "./user-flow-donor.png";
import userFlowMigrantWorker from "./user-flow-migrant-worker.png";
import userFlowVolunteer from "./user-flow-volunteer.png";
import whyResponse from "./why-response.svg";
import whyDependency from "./why-dependency.svg";
import researchCurrentExperience from "./research-current-experience.svg";
import separator from "./separator.svg";
import wave from "./wave.svg";

import "./index.css";

export default function ItsRainingRaincoatRedesign() {
  return (
    <>
      <div className="ItsRainingRaincoatRedesign ItsRainingRaincoatRedesign-cover">
        <Container style={{ paddingTop: 100, paddingBottom: 150 }}>
          <Row>
            <Col md={8}>
              <h1
                style={{
                  fontSize: 60,
                  fontWeight: 500,
                  lineHeight: "80px",
                  paddingTop: "0.6em",
                }}
              >
                Design to break barriers between migrant workers and residents
                of Singapore
              </h1>
              <div style={{ padding: "48px 0" }}>
                <Badge
                  pill
                  bg="primary"
                  className="ItsRainingRaincoatRedesign-badge"
                >
                  UX
                </Badge>
                <Badge
                  pill
                  // bg="primary"
                  className="ItsRainingRaincoatRedesign-badge"
                >
                  UI
                </Badge>
                <Badge
                  pill
                  bg="primary"
                  className="ItsRainingRaincoatRedesign-badge"
                >
                  Tablet App
                </Badge>
              </div>
              <div style={{ fontSize: 20 }}>
                General Assembly UX Design Immersive
                <br />2 weeks project
              </div>
            </Col>
            <Col md={4}>
              <video autoPlay loop muted style={{ width: "100%" }}>
                <source src={demo} type="video/mp4" />
              </video>
            </Col>
          </Row>
          <Row style={{ marginTop: 110 }}>
            <Col
              xs={12}
              md={4}
              style={{ flexDirection: "column", paddingRight: 100 }}
            >
              <h4>My Contributions</h4>
              <p>
                User Research, Comparative Analysis, UX/UI Design, Prototyping,
                Usability Testing, Iteration
              </p>
            </Col>
            <Col xs={12} md={8} style={{ paddingRight: 100 }}>
              <h4>Challenge</h4>
              <p>
                In collaboration with Eileen and YQ, we were challenged to
                review, assess and recommend how to make
                ItsRainingRaincoats'(IRR) online experiences more engaging,
                impactful, and usable for their audiences.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 64 }}>
            <Col
              xs={12}
              md={4}
              style={{ flexDirection: "column", paddingRight: 100 }}
            >
              <img alt="irr logo" src={logo} style={{ width: "100%" }} />
            </Col>
            <Col xs={12} md={8}>
              <p>
                <i style={{ fontSize: 24, lineHeight: "40px" }}>
                  ItsRainingRaincoats(IRR) is a Singapore charity that aims to
                  build bridges of integration between migrant workers and
                  residents of Singapore and improve quality of the migrant
                  workers' lives.
                </i>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ItsRainingRaincoatRedesign ItsRainingRaincoatRedesign-discover">
        <img
          src={wave}
          alt="wave"
          style={{ width: "100%", transform: "rotate(180deg)" }}
        />
        <Container style={{ paddingTop: 100, paddingBottom: 150 }}>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: 32,
                }}
              >
                Discover
              </h1>
              <h2 style={{ textAlign: "center", marginBottom: 16 }}>
                Why migrant workers in Singapore need help?{" "}
              </h2>
            </Col>
            <Col sm={12} md={10}>
              <p style={{ textAlign: "center" }}>
                Since IRR is a non-profit organization that helps migrant
                workers in Singapore, therefore, we want to understand a little
                more about migrant workers before we dive into reviewing IRR's
                current online experience.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 80 }}>
            <Col md={6} lg={3}>
              <div className="ItsRainingRaincoatRedesign-discover-card">
                <img src={discover1} alt="discovery-1" />
                <h2>369,400</h2>
                <h4>migrant worker in 2022</h4>
                <p>
                  makes up 26 % of the workforce in Singapore, however, social
                  prejudice against their ethnicity, national origin or class
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="ItsRainingRaincoatRedesign-discover-card">
                <img src={discover2} alt="discovery-2" />
                <h2>$5K - $12K</h2>
                <h4>recruitment fees</h4>
                <p>
                  high agency fees to secure a job and legal status that can be
                  revoked at any time by their employers
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="ItsRainingRaincoatRedesign-discover-card">
                <img src={discover3} alt="discovery-3" />
                <h2>$800</h2>
                <h4>average monthly salary</h4>
                <p>
                  dangerous jobs, long working hours, higher risk of accidents,
                  low wages & unpaid salaries
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="ItsRainingRaincoatRedesign-discover-card">
                <img src={discover4} alt="discovery-4" />
                <h2>12-16</h2>
                <h4>workers share a room</h4>
                <p>
                  poor accommodation, 3.5 sq m per resident with 1 set of
                  toilet, bathroom, sink and urinal per 15 residents
                </p>
              </div>
            </Col>
          </Row>
          <Row
            className="justify-content-center"
            style={{
              marginTop: 120,
              paddingBottom: 32,
              borderBottom: "2px solid #8d9399",
              textAlign: "center",
            }}
          >
            <img src={separator} alt="separator" style={{ width: "100%" }} />
            <h1 style={{ marginTop: 32, marginBottom: 16, fontSize: 48 }}>
              <i>I spent nothing on myself for 5 years</i>
            </h1>
            <p>
              by the headline of today online, reported the issue of recruitment
              fees
            </p>
          </Row>
          <Row className="justify-content-center" style={{ marginTop: 64 }}>
            <Col lg={8}>
              <p
                style={{
                  fontSize: 24,
                  lineHeight: "40px",
                  textAlign: "center",
                }}
              >
                Recruitment fee is a huge burden for migrant workers, which
                force them to bear whatever their employers offer them. It is
                also hard for them to send their voice out, not only because of
                the language barrier but also afraid their legal status gets
                revoked after speaking out.
              </p>
            </Col>
          </Row>
        </Container>
        <img src={wave} alt="wave" style={{ width: "100%" }} />
      </div>
      <div className="ItsRainingRaincoatRedesign ItsRainingRaincoatRedesign-research">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 style={{ marginTop: 16 }}>General Research</h2>
            </Col>
            <Col xs={12}>
              <h2 style={{ marginTop: 16 }}>
                What does ItsRainningRaincoats do?
              </h2>
            </Col>
            <Col xs={12}>
              <p style={{ marginTop: 16 }}>
                IRR improve the lives of migrant workers in Singapore by
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 40 }}>
            <Col md={6} lg={3} style={{ display: "flex" }}>
              <img
                src={research1}
                alt="research-1"
                style={{ height: 48, width: 48, marginRight: 24 }}
              />
              <p>
                pick up unsold food and distribute to workers who often eat
                curry and rice three times a day
              </p>
            </Col>
            <Col md={6} lg={3} style={{ display: "flex" }}>
              <img
                src={research2}
                alt="research-2"
                style={{ height: 48, width: 48, marginRight: 24 }}
              />
              <p>
                <b>
                  collect pre-loved items that help migrant workers ease their
                  daily lives
                </b>
              </p>
            </Col>
            <Col md={6} lg={3} style={{ display: "flex" }}>
              <img
                src={research3}
                alt="research-3"
                style={{ height: 48, width: 48, marginRight: 24 }}
              />
              <p>
                run campaigns to connect migrant workers and the local community
              </p>
            </Col>
            <Col md={6} lg={3} style={{ display: "flex" }}>
              <img
                src={research4}
                alt="research-4"
                style={{ height: 48, width: 48, marginRight: 24 }}
              />
              <p>
                online lesson for migrant workers to learn and improve English
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 150 }}>
            <Col md={8} style={{ paddingRight: "10%" }}>
              <h4 style={{ fontSize: 18 }}>FOCUS</h4>
              <p>
                After the general research, we found out collect pre-loved item
                is one thing that IRR currently focus on as IRR recently open a
                new place to store items for migrant workers to pick up, also
                donors' first touch point with IRR when they look for an
                organization to donate pre-loved items.
              </p>
            </Col>
            <Col md={4}>
              <img
                src={researchFocus}
                alt="collection office"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: 120 }}>
            <Col md={3}>
              <h2>What is the current experience like?</h2>
              <p>
                We interviewed 1 person from IRR, 3 migrant workers and 3
                volunteers and get a clear picture of users' journeys on item
                donation and item application.
              </p>
            </Col>
            <Col md={9}>
              <h4>Emotional Journey of item donation and request experience</h4>
              <p>
                through IRR's current channel: website, facebook and WhatsApp
              </p>
              <img
                src={researchCurrentExperience}
                alt="current experience"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={12} style={{ marginTop: 32 }}>
              <h2 style={{ textAlign: "center" }}>
                Learnings from user's journey
              </h2>
              <img
                src={researchLearning}
                alt="learnings"
                style={{ width: "100%", marginTop: 40 }}
              />
            </Col>
          </Row>
          <Row
            className="justify-content-center"
            style={{
              marginTop: 120,
              paddingBottom: 32,
              borderBottom: "2px solid #8d9399",
              textAlign: "center",
            }}
          >
            <img src={separator} alt="separator" style={{ width: "100%" }} />
            <h1 style={{ marginTop: 32, marginBottom: 16, fontSize: 48 }}>
              <i>
                I have to find the number of a volunteer to request for an item
                I want, and my english isn't that good.
              </i>
            </h1>
            <p>by S, Migrant Worker</p>
          </Row>
          <Row style={{ marginTop: 48 }}>
            <h4
              style={{ fontWeight: 300, padding: "0 20%", textAlign: "center" }}
            >
              The low points in users' journey show users feel most{" "}
              <b style={{ fontWeight: 700 }}>
                frustrated when there is communication or interaction
              </b>{" "}
              between donors and migrant workers with volunteers.
            </h4>
          </Row>
          <Row style={{ marginTop: 200 }}>
            <Col>
              <h1>Define</h1>
            </Col>
          </Row>
          <Row style={{ marginTop: 32 }}>
            <Col md={4}>
              <h2>
                Why is it frustrating to communicate and interact with
                volunteers for item donation and application?
              </h2>
            </Col>
            <Col md={{ span: 3, offset: 2 }}>
              <div>
                <img
                  src={whyResponse}
                  alt="no response"
                  style={{ width: 64 }}
                />
                <h4 style={{ marginTop: 16 }}>No Response</h4>
                <h4 style={{ fontWeight: 300, marginTop: 16 }}>
                  volunteers from IRR are unpaid, which means they cannot give
                  timely response
                </h4>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <img
                  src={whyDependency}
                  alt="dependency"
                  style={{ width: 64 }}
                />
                <h4 style={{ marginTop: 16 }}>Dependency</h4>
                <h4 style={{ fontWeight: 300, marginTop: 16 }}>
                  both donors and migrant workers are rely on volunteers to get
                  information
                </h4>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 200, paddingBottom: 200 }}>
            <Col md={6} lg={3}>
              <h2>How can we improve experiences for...</h2>
            </Col>
            <Col md={6} lg={3}>
              <div className="ItsRainingRaincoatRedesign-discover-card">
                <img src={discover1} alt="migrant worker avatar" />
                <p style={{ marginTop: 16 }}>Migrant Workers</p>
                <h4 style={{ marginTop: 16, fontWeight: 700 }}>
                  Adbur Mahim Hasanat
                </h4>
                <p style={{ marginTop: 16 }}>
                  "I really want to earn more money to provide a better life for
                  my family."
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="ItsRainingRaincoatRedesign-discover-card">
                <img src={avatarVolunteer} alt="volunteer avatar" />
                <p style={{ marginTop: 16 }}>Volunteers</p>
                <h4 style={{ marginTop: 16, fontWeight: 700 }}>
                  Rashmi Rajandran
                </h4>
                <p style={{ marginTop: 16 }}>
                  "I actively volunteer because I want to help and make a
                  difference in people’s lives as much as I can."
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="ItsRainingRaincoatRedesign-discover-card">
                <img src={avatarDonor} alt="donor avatar" />
                <p style={{ marginTop: 16 }}>Donors</p>
                <h4 style={{ marginTop: 16, fontWeight: 700 }}>Sophie Lim</h4>
                <p style={{ marginTop: 16 }}>
                  "I do not want to throw away my preloved bicycle as it is in
                  good condition. What should I do?"
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ItsRainingRaincoatRedesign ItsRainingRaincoatRedesign-ideation">
        <img
          src={wave}
          alt="wave"
          style={{ width: "100%", transform: "rotate(180deg)" }}
        />
        <Container>
          <Row style={{ marginTop: 100 }}>
            <Col xs={12}>
              <h1>Ideation</h1>
              <h2 style={{ marginTop: 32 }}>Evaluation</h2>
              <h4 style={{ marginTop: 16 }}>Donors</h4>
            </Col>
            <Col>
              <img src={donorsCurrent} alt="" style={{ width: "80%" }} />
            </Col>
            <Col>
              <img src={donorsNew} alt="" style={{ width: "80%" }} />
            </Col>
            <Col xs={12}>
              <h4 style={{ marginTop: 48 }}>Migrant Workers</h4>
            </Col>
            <Col>
              <img
                src={migrantWorkersCurrent}
                alt=""
                style={{ width: "80%" }}
              />
            </Col>
            <Col>
              <img src={migrantWorkersNew} alt="" style={{ width: "80%" }} />
            </Col>
            <Col xs={12}>
              <h4 style={{ marginTop: 48 }}>Volunteers</h4>
            </Col>
            <Col>
              <img src={volunteersCurrent} alt="" style={{ width: "80%" }} />
            </Col>
            <Col>
              <img src={volunteersNew} alt="" style={{ width: "80%" }} />
            </Col>
          </Row>
          <Row style={{ marginTop: 120 }}>
            <Col md={3}>
              <h2>
                We can break the communication and interaction barriers by...
              </h2>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <div>
                <img src={iconDb} alt="" style={{ width: 64 }} />
                <h4 style={{ marginTop: 16 }}>Centralised information</h4>
                <p style={{ marginTop: 16 }}>
                  <ul>
                    <li>easy access to information</li>
                    <li>ease communication</li>
                    <li>avoid miscommunication</li>
                  </ul>
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <img src={iconRecycle} alt="" style={{ width: 64 }} />
                <h4 style={{ marginTop: 16 }}>Standardise process</h4>
                <p style={{ marginTop: 16 }}>
                  <ul>
                    <li>reduce waiting time</li>
                    <li>reduce dependency</li>
                    <li>fast decision making</li>
                  </ul>
                </p>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 120 }}>
            <Col md={3}>
              <h2>Where should we build?</h2>
              <p style={{ marginTop: 16 }}>
                Based on a survey conducted by the ministry of manpower with
                migrant workers in Singapore and user interviews we did with
                volunteers and migrant workers
              </p>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <div>
                <img src={iconPhone} alt="" style={{ width: 64 }} />
                <p style={{ marginTop: 48 }}>
                  More than half of the migrant workers have a smartphone device
                  to stay connected with their family
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <img src={iconAndroid} alt="" style={{ width: 64 }} />
                <p style={{ marginTop: 48 }}>
                  84 % of the migrant workers use an android device with small
                  screen size
                </p>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 120, marginBottom: 60 }}>
            <Col md={3}>
              <h2>User Flows</h2>
              <p style={{ marginTop: 16 }}>
                with the goal of building centralised and standardised item
                donation and application on the android platform, each of the
                team members come up with low-fidelity sketches for discussion.
                We then make a user flow for each persona, donors, migrant
                workers and volunteers.
              </p>
            </Col>
            <Col md={9}>
              <Carousel variant="dark" style={{ height: 400 }}>
                <Carousel.Item>
                  <img src={userFlowDonor} alt="" style={{ width: "100%" }} />
                  <Carousel.Caption style={{ left: 50, top: 50 }}>
                    <p style={{ textAlign: "left" }}>Donors' User Flow</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={userFlowMigrantWorker}
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <Carousel.Caption style={{ left: 50, top: 50 }}>
                    <p style={{ textAlign: "left" }}>
                      Migrant Workers' User Flow
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={userFlowVolunteer}
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <Carousel.Caption style={{ left: 50, top: 50 }}>
                    <p style={{ textAlign: "left" }}>Volunteers' User Flow</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <img src={wave} alt="wave" style={{ width: "100%" }} />
      </div>
      <div className="ItsRainingRaincoatRedesign ItsRainingRaincoatRedesign-design">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1 style={{ textAlign: "center" }}>Design</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2>Style Guide</h2>
            </Col>
            <Col xs={12} style={{ marginTop: 16 }}>
              <img
                src={styleGuide}
                alt=""
                style={{ marginLeft: 0, marginRight: 0, width: "100%" }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: 150 }}>
            <Col md={6}>
              <h2>High-Fidelity Prototype</h2>
              <p style={{ marginTop: 16 }}>
                Based on the research findings, we did sketches, wireframes and
                mid-fidelity prototypes, we also iterated our design with the
                feedback we got from the usability test and then came out with
                the final design.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ marginTop: 32 }}>
              <h4>
                Item donation experience
                <br />
                for donors
              </h4>
              <img
                src={hifiDonor}
                alt=""
                style={{ margin: "16px 0 0 0", width: "100%" }}
              />
              <div
                className="justify-content-center"
                style={{ display: "flex" }}
              >
                <Button
                  variant="warning"
                  href="https://www.figma.com/proto/ulwScT7LWhE2C7G8sKHjDv/P3---Redesign-for-IRR---Revise?page-id=338%3A2227&node-id=338%3A2248&viewport=250%2C365%2C0.08&scaling=scale-down&starting-point-node-id=338%3A2248"
                  target="_blank"
                  className="ItsRainingRaincoatRedesign-design-button"
                  size="lg"
                  style={{ marginTop: 64 }}
                >
                  View Prototype
                </Button>
              </div>
            </Col>
            <Col xs={12} style={{ marginTop: 96 }}>
              <h4>
                Item application experience
                <br />
                for migrant workers
              </h4>
              <img
                src={hifiWorker}
                alt=""
                style={{ margin: "16px 0 0 0", width: "100%" }}
              />
              <div
                className="justify-content-center"
                style={{ display: "flex" }}
              >
                <Button
                  variant="warning"
                  href="https://www.figma.com/proto/ulwScT7LWhE2C7G8sKHjDv/P3---Redesign-for-IRR---Revise?page-id=338%3A4326&node-id=338%3A4355&viewport=114%2C296%2C0.08&scaling=scale-down&starting-point-node-id=338%3A4355"
                  target="_blank"
                  className="ItsRainingRaincoatRedesign-design-button"
                  size="lg"
                  style={{ marginTop: 64 }}
                >
                  View Prototype
                </Button>
              </div>
            </Col>
            <Col xs={12} style={{ marginTop: 96, marginBottom: 100 }}>
              <h4>
                Item donation/application review experience
                <br />
                for volunteers
              </h4>
              <img
                src={hifiVolunteer}
                alt=""
                style={{ margin: "16px 0 0 0", width: "100%" }}
              />
              <div
                className="justify-content-center"
                style={{ display: "flex" }}
              >
                <Button
                  variant="warning"
                  href="https://www.figma.com/proto/ulwScT7LWhE2C7G8sKHjDv/P3---Redesign-for-IRR---Revise?page-id=338%3A6425&node-id=338%3A6494&viewport=179%2C-167%2C0.16&scaling=scale-down&starting-point-node-id=338%3A6494"
                  target="_blank"
                  className="ItsRainingRaincoatRedesign-design-button"
                  size="lg"
                  style={{ marginTop: 64 }}
                >
                  View Prototype
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ItsRainingRaincoatRedesign ItsRainingRaincoatRedesign-reflection">
        <img
          src={wave}
          alt="wave"
          style={{ width: "100%", transform: "rotate(180deg)" }}
        />
        <Container>
          <Row style={{ marginTop: 160 }}>
            <Col>
              <h1>Reflection</h1>
            </Col>
          </Row>
          <Row style={{ marginTop: 16 }}>
            <Col md={3}>
              <h2>Final Thoughts</h2>
            </Col>
            <Col md={9}>
              <h4>Research</h4>
              <p style={{ marginTop: 16 }}>
                In the beginning, we were trying very hard to reach out to IRR
                to try to set up interviews with them, so we can get more
                information about the organization, however, we were not able to
                do that. We should have moved on to try different methods to
                approach the problem as early as possible.
              </p>
              <h4 style={{ marginTop: 48 }}>Design</h4>
              <p style={{ marginTop: 16 }}>
                There is always not enough time when it comes to design,
                however, if we have more time I think we could have explored the
                opportunity of how we can connect migrant workers and the
                society of Singapore. We need to eliminate the social prejudice
                against migrant workers to push big policy changes.
              </p>
              <h4 style={{ marginTop: 48 }}>Teamwork</h4>
              <p style={{ marginTop: 16 }}>
                I think the biggest takeaway for me after this two weeks team
                project is that I found out I actually enjoy working as a team.
                There is always a blind spot when working alone, and all the
                fresh views and ideas that team members bring are what make the
                design alive.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
