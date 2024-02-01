import React, {useState} from 'react'
import { Button, Card, CardBody, CardTitle, Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const baseUrl ="https://portfolio-v8e5.onrender.com";

  const sendEmail = async () => {
    const dataSend ={
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    const res =await fetch (`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }).then((res) => {
      console.log(res);
      if (res.status > 199 && res.status < 300) {
        alert("Send Successfully !");
      }
    });

  }



  return (
    <div id='contact' className='pb-5 mb-5'>
      <Container>
        <Row className='justify-content-center'>
          <Card className="border-none py-3">
            <CardBody className="text-center">
              <CardTitle as="h2">Contact</CardTitle>
            </CardBody>
          </Card>
          <Col xs={12} md={8} className=''>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
               <Row className="mb-3">
                 <Form.Group as={Col} controlId="formGridName">
                   <Form.Label>Name</Form.Label>
                   <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" required/>
                 </Form.Group>
   
                 <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required/>
                 </Form.Group>
               </Row>
               <Row className="mb-3">
                 <Form.Group as={Col} controlId="formGridSubject">
                   <Form.Label>Subject</Form.Label>
                   <Form.Control type="text" onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject" required/>
                 </Form.Group>
               </Row>
               <Row className="mb-3">
                 <Form.Group className="mb-3" controlId="formGridMessage">
                   <Form.Label>Message</Form.Label>
                   <Form.Control as="textarea" onChange={(e) => setMessage(e.target.value)} rows={3} placeholder='Enter Message' required/>
                 </Form.Group>
               </Row>
               <Button type="submit" onClick={() => sendEmail()} className="btn-cutom-color">
                 Submit
               </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact