import React from 'react'
import { Button, Card, CardBody, CardGroup, CardHeader, CardImg, CardText, CardTitle, Col, Container, ListGroup, ListGroupItem, ModalTitle, Row } from 'react-bootstrap'
import loginImg from "./assets/img/loginfromImg.jpeg"
import portfolioImg from "./assets/img/portfolioImg.jpg"
import defaultImg from "./assets/img/default-img.png"
import soccerblissImg from "./assets/img/soccerbliss-webPage.jpeg"
import profiviImg from "./assets/img/profivi-webPage.jpeg"
import lakhImg from "./assets/img/la-kh-webPage.jpeg"
import elitesalonImg from "./assets/img/elitesalon-webPage.jpeg"
import vanishyaImg from "./assets/img/vanishya-webPage.jpeg"
import futurefindsImg from "./assets/img/FutureFindzz.png"

const Projects = () => {

  const projectData = [
    {
      img: defaultImg,
      link: '#',
      titleName: "SELLEZ — ERP Application",
      content: "Developed a full-scale ERP web application using React.js and TypeScript. Implemented multi-role access (Super Admin, Admin, Partners, Users). Built core ERP modules including inventory management, vendor management, order processing, and reporting dashboards. Designed structured location hierarchy (Country → State → City → Area → Pincode → Zone → Territory). Developed catalog module, PO approval workflow, challan generation, and delivery proof with signature upload.",
      programs: {
        frontend: "React.js, TypeScript, CSS, Bootstrap",
        api: "REST API Integration",
      },
    },
    {
      img: defaultImg,
      link: '#',
      titleName: "YANGOZO — On-Demand Service Application",
      content: "Developed a multi-role on-demand service platform with real-time workflows. Implemented Technician flow (job acceptance, service updates), Professional flow (service management, booking handling), and Delivery flow (pickup, status tracking). Built responsive dashboards and dynamic service request management system.",
      programs: {
        frontend: "Angular",
        api: "REST API Integration",
      },
    },
    {
      img: defaultImg,
      link: '#',
      titleName: "5-IN-1 E-COMMERCE PLATFORM",
      content: "Built using React.js, Node.js, MongoDB, and Razorpay integration. Features role-based dashboards for Super Admin, Admin, and Customer with a modular multi-theme UI architecture.",
      programs: {
        frontend: "React.js, Bootstrap",
        backend: "Node.js, Express.js",
        database: "MongoDB",
      },
    },
    {
      img: loginImg,
      link: 'https://github.com/Gokul095/Login-form-1.0',
      titleName: "Login Form Validation",
      content: "User Login Form Validation with proper registration and Backend connectivity with middleware concept. Used Pug view engin for HTML template, normal css and stored user data's in Mongo Data Base .",
      programs: {
        frontend: "Pug View Engin, CSS, Javascript, Bootstrap, React Js",
        backend: "Node Js, Express Js",
        database: "Mongo DB",
      },
    },
    {
      img: portfolioImg,
      link: 'https://github.com/Gokul095/Portfolio.git',
      titleName: "My Portfolio",
      content: "Designed and developed a personal portfolio website to showcase my skills, projects, and achievements. The website serves as an interactive and informative platform for potential employers and collaborators.",
      programs:
      {
        frontend: "HTML, CSS, Javascript, Bootstrap, React Js",
        backend: "Node Js, Express Js, Nodemailer (for email)",
        database: "Not applicable",
      }

    },
  ];

  const liveProjectData = [
    {
      img: futurefindsImg,
      name: "FUTUREFINDS (E-COMMERCE)",
      url: "#",
      content: "Developed a complete e-commerce platform using WordPress & WooCommerce. Integrated payments, product setup, and ensured a responsive UI for a seamless shopping experience.",
      developed: {
        tech: "WordPress, Elementor, WooCommerce"
      },
    },
    {
      img: defaultImg,
      name: "Maara Crackers",
      url: "#",
      content: "Maara Crackers required a modern and easy-to-use e-commerce website to sell crackers online. We developed a clean, user-friendly shopping platform that allows customers to browse products easily and place orders without hassle.",
      developed: {
        tech: "E-commerce Website Development, UI/UX Design, Mobile-Responsive Layout"
      },
    },
    {
      img: defaultImg,
      name: "Meeku Girls",
      url: "#",
      content: "Meeku Girls is an online jewellery brand targeting modern shoppers. We developed a stylish and elegant e-commerce website that highlights product visuals, enhances user experience, and builds trust with customers.",
      developed: {
        tech: "E-commerce Website Development, UI/UX Design, Mobile-Responsive Layout"
      },
    },
    {
      img: vanishyaImg,
      name: "Vanishya Consumer Products",
      url: "https://vanishya.com/",
      content: "",
      developed: {
        tech: "Wordpress, Divi Theme"
      },
    },
  ]



  return (
    <div id='project' className='pb-5'>
      <Container>
        <Row>
          <Card className="border-none py-3">
            <CardBody className="text-center">
              <CardTitle as="h2">Projects</CardTitle>
            </CardBody>
          </Card>
          {projectData.map((project, index) => (
            <Col xs={12} md={6} className='pt-5' key={index}>
              <Card>
                <CardImg variant='top' src={project.img} alt={project.titleName}></CardImg>
                <CardHeader className='text-center py-3'>
                  <Button href={project.link} className='btn-cutom-color' target='blank'>View Github Code</Button>
                </CardHeader>
                <CardBody>
                  <CardTitle as="h4">{project.titleName}</CardTitle>
                  <CardText>{project.content}</CardText>
                  <ListGroup as="ol" numbered>
                    <ModalTitle as="h5" className='mb-2'>Technologies Used:</ModalTitle>
                    {project.programs.frontend && <CardText>Frontend : {project.programs.frontend}</CardText>}
                    {project.programs.backend && <CardText>Backend : {project.programs.backend}</CardText>}
                    {project.programs.database && <CardText>Database : {project.programs.database}</CardText>}
                    {project.programs.api && <CardText>API Integration : {project.programs.api}</CardText>}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Row>
          <Card className="border-none pt-5">
            <CardBody className="text-center">
              <CardTitle as="h2">Live Projects</CardTitle>
            </CardBody>
          </Card>
          {liveProjectData.map((liveProject, index) => (
            <Col xs={12} md={4} className='pt-5' key={index}>
              <Card>
                <CardImg variant='top' src={liveProject.img} alt={liveProject.name}></CardImg>
                <CardHeader className='text-center py-3'>
                  <Button href={liveProject.url} className='btn-cutom-color' target='blank'>View Website</Button>
                </CardHeader>
                <CardBody>
                  <CardTitle as="h4">{liveProject.name}</CardTitle>
                  <CardText>{liveProject.content}</CardText>
                  <ListGroup as="ol" numbered>
                    <ModalTitle as="h5" className='mb-2'>Technologies Used:</ModalTitle>
                    <CardText>Build in : {liveProject.developed.tech}</CardText>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Projects