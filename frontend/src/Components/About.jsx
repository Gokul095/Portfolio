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
                  I'm Gokul Saran, a passionate Frontend Developer with 2 years of
                  experience in building responsive and user-centric web applications.
                  I specialize in Angular, React, TypeScript, and modern UI frameworks,
                  delivering high-quality code and seamless user experiences.
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
                              target="blank"
                            >
                              <FiLinkedin />
                            </ListGroupItem>
                            <ListGroupItem
                              action
                              href="https://github.com/Gokul095"
                              className="border-none"
                              target="blank"
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
                  <CardTitle as="h4">Frontend Developer</CardTitle>
                  <CardText as="p" className="mb-1">
                    MyFluiditi, Chennai
                  </CardText>
                  <CardText as="p">Apr 2024 - Present</CardText>

                  <CardTitle>Roles & Responsibilities</CardTitle>
                  <CardBody as="ul">
                    <CardText as="li">Developed scalable, modular UI components using Angular, React and TypeScript, ensuring high performance and reusability.</CardText>
                    <CardText as="li">Converted complex Figma designs into fully responsive, production-ready UI with clean, optimized component architecture.</CardText>
                    <CardText as="li">Integrated REST APIs for products, orders, vendors, and service workflows with efficient state and data management.</CardText>
                    <CardText as="li">Built key application modules including store listings, product pages, vendor dashboards, and end-to-end order flows.</CardText>
                    <CardText as="li">Delivered robust UI systems for centralized catalog, payout cycle, coupon engine, and vendor priority ordering.</CardText>
                  </CardBody>
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
                  <CardText as="p">Nov 2022 - Nov 2023</CardText>

                  <CardTitle>Roles & Responsibilities</CardTitle>
                  <CardBody as="ul">
                    <CardText as="li">Built responsive websites using HTML, CSS, JavaScript & Bootstrap.</CardText>
                    <CardText as="li">Customized WordPress sites using Elementor & Divi.</CardText>
                    <CardText as="li">Enhanced website performance, SEO, and user experience.</CardText>
                  </CardBody>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} className="py-3">
              <Card>
                <CardBody className="exp-body">
                  <CardTitle as="h4">Freelance Web Developer</CardTitle>
                  <CardText as="p" className="mb-1">
                    Remote
                  </CardText>
                  <CardText as="p">Dec 2023 - Present</CardText>

                  <CardTitle>Roles & Responsibilities</CardTitle>
                  <CardBody as="ul">
                    <CardText as="li">Developed multiple WordPress & WooCommerce websites with Razorpay integration.</CardText>
                    <CardText as="li">Managed deployment, hosting, updates, and client training.</CardText>
                  </CardBody>
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
                    <CardTitle as="h6">2019 - 2022</CardTitle>
                    <CardTitle as="h6">B.Com (Commerce)</CardTitle>
                    <CardTitle as="h6">
                      St. Thomas College of Arts & Science, Chennai
                    </CardTitle>
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
