import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherForm = () => {
  return (
    <Form className="d-flex justify-content-center">
      <Form.Group>
        <Form.Control type="text" placeholder="Type your city" />
      </Form.Group>

      <Form.Group>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WeatherForm;
