import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  return (

    <div className="col-3 ml-0 mt-3" style={{maxHeight:'90vh', overflowY:'scroll'}}>
      
      {countries.map((country) => (

        <div className='list-group ml-0'>
          <Link key={country.cca3} to={`/countries/${country.cca3}`}>
              <p>
              <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} style={{width:'25px'}} alt=''/>
              &nbsp; &nbsp;
              {country.name.official}
              </p> 
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
