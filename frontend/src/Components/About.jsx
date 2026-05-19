import React from "react";
import aboutImg from "./assets/img/lightImg.jpeg";
import myImg from "./assets/img/suitImg.jpg";

import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  CardText,
  Image,
  Button,
  CardTitle,
  ListGroup,
  ListGroupItem,
  ModalTitle,
  CardGroup,
} from "react-bootstrap";

import { FiGithub, FiLinkedin } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="pb-5">
      <Container>
        <Row>
          {/* <Col xs={12} md={6} className="py-3">
            <Image src={aboutImg} alt="gokul-image" fluid rounded />
          </Col> */}
          <Col xs={12} md={6} className="py-3">
            <Image src={myImg} alt="gokul-image" fluid rounded />
          </Col>

          <Col xs={12} md={6} className="py-3">
            <Card className="border-none">
              <CardHeader className="about-header" as="h3">
                Let's
                <br />
                Introduce about
                <br /> myself
              </CardHeader>
              <CardBody>
                <CardText as="p">
                  Frontend Developer with 3+ years of experience building responsive, scalable, and high-performance web applications using React.js, Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. Skilled in reusable component architecture, REST API integration, state management, role-based dashboards, and frontend performance optimization. Experienced in developing enterprise applications, admin panels, eCommerce platforms, and modern UI solutions in Agile environments.
                </CardText>
                <CardText as="h2">Personal Info</CardText>
                <Container>
                  <Row>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-4">Email</CardTitle>
                          <CardText
                            as="a"
                            href="mailto:gokulsaran095@gmail.com"
                          >
                            gokulsaran095@gmail.com
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-4">Phone</CardTitle>
                          <CardText>(+91) 70922 20372</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-4">Location</CardTitle>
                          <CardText>Avadi,Chennai</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-0">Follow</CardTitle>
                          <ListGroup as="ul" className="social-icon" horizontal>
                            <ListGroupItem
                              action
                              href="https://www.linkedin.com/in/gokul-saran-2ab6a4247"
                              className="border-none"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FiLinkedin />
                            </ListGroupItem>
                            <ListGroupItem
                              action
                              href="https://github.com/Gokul095"
                              className="border-none"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FiGithub />
                            </ListGroupItem>
                          </ListGroup>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <CardGroup>
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader className="border-bottom-0">
                  <CardTitle className="about-header mb-0 border-bottom-0" as="h3">
                    Experience
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col xs={12} md={6} className="py-3">
              <Card>
                <CardBody className="exp-body">
                  <CardTitle as="h4">Software Developer</CardTitle>
                  <CardText as="p" className="mb-1">
                    MyFluiditi, Chennai
                  </CardText>
                  <CardText as="p">Apr 2024 – Apr 2026</CardText>

                  <CardTitle>Roles &amp; Responsibilities</CardTitle>
                  <ul className="exp-body">
                    <li>Developed scalable frontend applications using React.js, Angular, TypeScript, and Tailwind CSS</li>
                    <li>Built responsive and reusable UI components from Figma designs with mobile-first architecture</li>
                    <li>Integrated REST APIs for authentication, products, orders, dashboards, and user management modules</li>
                    <li>Implemented role-based access control (RBAC) dashboards for Admin, Partner, Vendor, and User systems</li>
                    <li>Optimized application performance using lazy loading, code splitting, and reusable component architecture</li>
                    <li>Collaborated with backend, QA, and product teams in Agile sprint environments to deliver production-ready features</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} className="py-3">
              <Card>
                <CardBody className="exp-body">
                  <CardTitle as="h4">Web Developer</CardTitle>
                  <CardText as="p" className="mb-1">
                    Profivi Technologies, Chennai
                  </CardText>
                  <CardText as="p">Nov 2022 – Nov 2023</CardText>

                  <CardTitle>Roles &amp; Responsibilities</CardTitle>
                  <ul className="exp-body">
                    <li>Developed responsive business and eCommerce websites using HTML5, CSS3, JavaScript, Bootstrap, React.js, Angular, and WordPress</li>
                    <li>Built WooCommerce stores with payment gateway integrations, while improving SEO, accessibility, and frontend performance for better user experience</li>
                    <li>Designed mobile-first, cross-browser compatible UI layouts and collaborated with clients and internal teams to deliver customized web solutions</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} className="py-3">
              <Card>
                <CardHeader>
                  <CardTitle className="about-header mb-0" as="h3">
                    Education
                  </CardTitle>
                </CardHeader>
                <CardBody className="exp-body">
                  <div className="mb-4">
                    <CardTitle as="h6">2019 – 2022 | B.Com (Corporate Secretaryship)</CardTitle>
                    <CardTitle as="h6">
                      St. Thomas College of Arts &amp; Science, Chennai
                    </CardTitle>
                    <CardText style={{fontSize: '13px'}} className="fst-italic">
                      Career transitioned to software development in 2022 through self-directed learning and professional practice.
                    </CardText>
                  </div>
                  <div className="mb-4">
                    <CardTitle as="h6">2018 – 2019 | HSC</CardTitle>
                    <CardTitle as="h6">Holy Infant Jesus Matriculation Hr. Sec School, Chennai</CardTitle>
                  </div>
                  <div>
                    <CardTitle as="h6">2016 – 2017 | SSLC</CardTitle>
                    <CardTitle as="h6">Holy Infant Jesus Matriculation Hr. Sec School, Chennai</CardTitle>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default About;
