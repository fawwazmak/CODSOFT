// src/App.js
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const App = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch('https://formspree.io/f/xqazpqvg', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setFormState({ name: '', email: '', whatsapp: '', message: '' });
    } else {
      alert('Form submission failed. Please try again.');
    }
  };

  return (
      <Row className="form rounded-4 p-4">
        <Col md="12">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                </Form.Group>

                <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                </Form.Group>

                <Form.Group controlId="formWhatsapp">
                <Form.Label>WhatsApp Number</Form.Label>
                <Form.Control
                    type="text"
                    name="whatsapp"
                    value={formState.whatsapp}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number"
                />
                </Form.Group>

                <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter your message"
                />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100 my-3'>
                Submit
                </Button>
            </Form>
        </Col>
      </Row>
  );
};

export default App;
