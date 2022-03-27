import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { COUNTRIES } from '../constants/countries';

const WeatherForm = () => {
  return (
    <Form className="d-flex justify-content-center">
      <Form.Group>
        <Form.Control type="text" placeholder="Type your city" />
      </Form.Group>

      <Form.Group>
        <Form.Select aria-label="Default select example">
          <option>Select a country</option>
          {Object.entries(COUNTRIES).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WeatherForm;
