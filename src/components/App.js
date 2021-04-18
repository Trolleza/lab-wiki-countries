// import '../App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import countries from '../countries.json';
import CountryDetails from './CountryDetails';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />

          <BrowserRouter>
            <Route path="/countries/:CountryCCA3" component={CountryDetails} />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
