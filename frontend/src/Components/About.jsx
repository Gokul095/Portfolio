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
                  Results-driven Frontend Developer with 3+ years of experience building
                  scalable, responsive, and high-performance web applications using React.js,
                  Angular, TypeScript, and JavaScript. Strong expertise in reusable component
                  architecture, REST API integration, state management, role-based dashboards,
                  and UI optimization. Proven success delivering enterprise SaaS, admin panels,
                  eCommerce platforms, and business-critical features in Agile environments.
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
                    <li>Developed reusable React.js and Angular components, improving delivery speed by <strong>30%</strong>.</li>
                    <li>Built responsive UI screens from Figma designs using TypeScript, Tailwind CSS, and SCSS.</li>
                    <li>Integrated 10+ REST APIs for products, orders, users, and vendor modules.</li>
                    <li>Implemented role-based dashboards for Super Admin, Admin, Partner, and User access.</li>
                    <li>Improved application performance by <strong>35%</strong> using lazy loading and code splitting.</li>
                    <li>Collaborated with QA, backend, and product teams in Agile sprint cycles.</li>
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
                    <li>Developed 10+ responsive business websites using HTML5, CSS3, JavaScript, and Bootstrap.</li>
                    <li>Built WooCommerce eCommerce stores with checkout and payment gateway integrations.</li>
                    <li>Improved SEO, speed, and accessibility through frontend optimization.</li>
                    <li>Delivered mobile-first and cross-browser compatible UI experiences.</li>
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
