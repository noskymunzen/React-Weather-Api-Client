import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { COUNTRIES } from '../constants/countries';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  return (
    <Form className="d-flex justify-content-center">
      <Row>
        <Form.Group className="mb-3 px-0">
          <Form.Control
            type="text"
            placeholder="Type your city"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 px-0">
          <Form.Select
            aria-label="Default select example"
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option>Select a country</option>
            {Object.entries(COUNTRIES).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="warning" type="submit">
          Check weather
        </Button>
      </Row>
    </Form>
  );
};

export default WeatherForm;
