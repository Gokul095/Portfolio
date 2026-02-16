import React from "react";
import './Style.css';
import './Responsive.css';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import defaultImage from "./assets/img/default-img.png";
import myImg from "./assets/img/suitImg.jpg";

const Home = () => {
  return (
    <div className="hero-banner py-3" id="home">
      <Container>
        <Row>
          <Col xs={12} md={12} className="py-3">
            <Card className="left-hero border-none">
              <CardHeader>
                <CardText as='h5'>Hi there!</CardText>
                <CardText as='h2'>I'm Gokul Saran</CardText>
              </CardHeader>
              <CardBody>
                <CardTitle as="h1">Frontend Developer</CardTitle>
                <CardTitle as="h1" className="d-block text-design" data-text="Angular / React">Angular / React</CardTitle>
                <CardText className="py-3">Frontend Developer with 2 years of experience designing and developing responsive, user-centric web applications. Proficient in Angular, React, TypeScript, JavaScript, and modern UI frameworks, with a strong focus on performance, usability, and clean code.</CardText>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xs={12} md={5} className="py-3">
            <Image src={myImg} alt="gokul-image" fluid rounded />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
