import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import WeatherForm from './components/WeatherForm';
import $weather from './services/weather';
import { kelvinToFahrenheit } from './helpers/weather';
import { Spinner, Container, Row } from 'react-bootstrap';
import WeatherSummary from './components/WeatherSummary';

function App() {
  const [hasSuccess, setHasSuccess] = useState(false);
  const [city, setCity] = useState('');
  const [currentTemp, setCurrentTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ city, country }) => {
    setLoading(true);
    try {
      const response = await $weather.getWeatherByCityCountry(city, country);
      setCurrentTemp(kelvinToFahrenheit(response.main.temp));
      setMaxTemp(kelvinToFahrenheit(response.main.temp_max));
      setMinTemp(kelvinToFahrenheit(response.main.temp_min));
      setCity(response.name);
      setHasSuccess(true);
    } catch (err) {
      console.error(err);
      setHasSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="d-flex justify-content-center mb-5 mt-5 text-white">
        Check your local region weather ⛅
      </h1>
      <Container className="d-flex justify-content-center mb-3">
        <Row className="d-flex justify-content-center">
          {hasSuccess && !loading && (
            <WeatherSummary
              city={city}
              currentTemp={currentTemp}
              maxTemp={maxTemp}
              minTemp={minTemp}
            />
          )}
          {loading && (
            <Spinner className="mb-5" animation="grow" variant="warning" />
          )}

          <WeatherForm onSubmit={handleSubmit} />
        </Row>
      </Container>
    </>
  );
}

export default App;
