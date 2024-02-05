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
                  I'm Gokul Saran, 23 years old. After completing my Bachelor's
                  Degree in B.Com in 2022, I pursued self-learning to enhance my
                  skills in web development. Currently, I have 1 year of
                  valuable experience in the field, contributing to my
                  continuous growth in this dynamic industry.
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
          <Card>
            <CardHeader>
              <CardTitle className="about-header mb-0" as="h3">
                Experience
              </CardTitle>
            </CardHeader>
            <CardBody className="exp-body">
              <CardTitle as="h4">Web Developer</CardTitle>
              <CardText as="p" className="mb-1">
                Profivi Technology
              </CardText>
              <CardText as="p">Nov 2022 - Nov 2023</CardText>

              <CardTitle>Roles & Responsibilities</CardTitle>
              <CardText as="li">
                Developed responsive and user-friendly web pages using HTML,
                CSS, and JavaScript.
              </CardText>
              <CardText as="li">
                Ensured cross-browser compatibility and optimized web
                applications for various devices.
              </CardText>
              <CardText as="li">
                Implemented modern design principles and collaborated with UI/UX
                designers to enhance the user experience.
              </CardText>
              <CardText as="li">
                Designed and implemented server-side logic using programming
                languages PHP, Node JS
              </CardText>
              <CardText as="li">
                Worked with databases, including MySQL to manage and store data
                efficiently.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="about-header mb-0" as="h3">
                Education
              </CardTitle>
            </CardHeader>
            <CardBody className="exp-body">
              <div className="mb-4">
                <CardTitle as="h6">2016 - 2017</CardTitle>
                <CardTitle as="h6">SSLC</CardTitle>
                <CardTitle as="h6">
                  Holy Infant Jesus Matriculation Hr.Sec School
                </CardTitle>
              </div>

              <div className="mb-4">
                <CardTitle as="h6">2018 - 2019</CardTitle>
                <CardTitle as="h6">HSC</CardTitle>
                <CardTitle as="h6">
                  Holy Infant Jesus Matriculation Hr.Sec School
                </CardTitle>
              </div>

              <div className="mb-4">
                <CardTitle as="h6">2019- 2022</CardTitle>
                <CardTitle as="h6">B.Com </CardTitle>
                <CardTitle as="h6">
                  St.Thomas College Of Arts And Science
                </CardTitle>
              </div>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default About;
