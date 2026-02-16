import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";
import defaultImg from "./assets/img/default-img.png"

import htmlIcon from "./assets/img/Technical logos/HTML5.png"
import cssIcon from "./assets/img/Technical logos/CSS3.png"
import bootstrapIcon from "./assets/img/Technical logos/bootstrap.png"
import javaScriptIcon from "./assets/img/Technical logos/java-script.png"
import AngularIcon from "./assets/img/Technical logos/AngularJS_logo.png"
import reactIcon from "./assets/img/Technical logos/react.png"
import TypeScriptIcon from "./assets/img/Technical logos/typescript-icon logo.png"
import nodeIcon from "./assets/img/Technical logos/node-js.png"
import expressIcon from "./assets/img/Technical logos/express-js.png"
import mongodbIcon from "./assets/img/Technical logos/mongo-db.png"
import tailwindcssIcon from "./assets/img/Technical logos/tailwindcss logo.png"
import woocommerceIcon from "./assets/img/Technical logos/woocommerce-logo.png"
import wordpressIcon from "./assets/img/Technical logos/wordpress.png"
import figmaIcon from "./assets/img/Technical logos/figma.png"
import photoshopIcon from "./assets/img/Technical logos/adobe-photoshop.png"
import gitIcon from "./assets/img/Technical logos/github-logo.png"

const Skills = () => {

  const skillsData = [
    {
      name: "HTML",
      percentage: 95,
      img: htmlIcon,
    },
    {
      name: "CSS",
      percentage: 95,
      img: cssIcon,
    },
    {
      name: "Bootstrap",
      percentage: 95,
      img: bootstrapIcon,
    },
    {
      name: "Tailwind CSS",
      percentage: 85,
      img: tailwindcssIcon,
    },
    {
      name: "Java Script",
      percentage: 90,
      img: javaScriptIcon,
    },
    {
      name: "TypeScript",
      percentage: 80,
      img: TypeScriptIcon,
    },
    {
      name: "React Js",
      percentage: 85,
      img: reactIcon,
    },
    {
      name: "Angular",
      percentage: 70,
      img: AngularIcon,
    },
    {
      name: "Node JS",
      percentage: 75,
      img: nodeIcon,
    },
    {
      name: "Express Js",
      percentage: 75,
      img: expressIcon,
    },
    {
      name: "Mongo Db",
      percentage: 70,
      img: mongodbIcon,
    },
    {
      name: "Wordpress",
      percentage: 95,
      img: wordpressIcon,
    },
    {
      name: "WooCommerce",
      percentage: 90,
      img: woocommerceIcon,
    },
    {
      name: "Figma",
      percentage: 85,
      img: figmaIcon,
    },
    {
      name: "Git/GitHub",
      percentage: 85,
      img: gitIcon,
    },
    {
      name: "Photoshop",
      percentage: 75,
      img: photoshopIcon,
    },
  ]

  return (
    <div id="skill" className='pb-5'>
      <Container>
        <Row>
          <Card className="border-none py-3">
            <CardBody className="text-center">
              <CardTitle as="h2">Skill Set</CardTitle>
            </CardBody>
          </Card>
          {skillsData.map((skill, index) => (
            <Col xs={6} md={2} className="py-3" key={index}>
              <Card className="skill-set-card">
                <CardImg variant="top" src={skill.img} alt={skill.name}></CardImg>
                <CardBody className="text-center">
                  <CardTitle as="h5">{skill.name}</CardTitle>
                </CardBody>
                <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} visuallyHidden />
              </Card>
            </Col>
          ))}


        </Row>
      </Container>
    </div>
  );
};

export default Skills;





