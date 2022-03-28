import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WeatherSummary = ({ city, currentTemp, maxTemp, minTemp }) => {
  return (
    <>
      <h2 className="d-flex justify-content-center text-white">
        {city}&lsquo;s weather:
      </h2>
      <Container className="d-flex justify-content-center mt-3 mb-5 text-white">
        <Row xs={1} md={1}>
          <Col className="h2 d-flex justify-content-center mt-3 mb-5">
            {currentTemp}°
          </Col>
          <Col className="h5 d-flex justify-content-center mb-3">
            Max: {maxTemp}°
          </Col>
          <Col className="h5 d-flex justify-content-center mb-3">
            Min: {minTemp}°
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeatherSummary;
