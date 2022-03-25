import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherForm from './components/WeatherForm';

function App() {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-5">
        Check your local region weather ⛅
      </h1>
      <WeatherForm />
    </>
  );
}

export default App;
