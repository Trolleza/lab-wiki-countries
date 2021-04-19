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

      <div className="container col-12">
        <div className="row">
          <CountriesList countries={countries} />
          <Route path="/countries/:CountryCCA3" component={CountryDetails} /> 
        </div>
      </div>
    </div>
  );
}

export default App;
