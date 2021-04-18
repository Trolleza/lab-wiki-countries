import React from 'react';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    borders: [],
    area: null,
  };

  componentDidMount() {
    const country = countries.find((country) => {
      return country.cca3 === this.props.match.params.CountryCCA3;
    });

    if (country) {
      this.setState({
        name: country.name.official,
        capital: country.capital,
        borders: country.borders,
        area: country.area,
      });
    }
  }

  render() {
    return (
      <div className="ml-5 mt-5 col-5">
        <h2>{this.state.name}</h2>
        <hr />
        <h5 className="ml-4">
          Capital &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {this.state.capital}
        </h5>
        <hr />
        <h5 className="ml-4">
          Area &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
          {this.state.area}km²
        </h5>
        <hr />
        <h4 className="ml-4">Borders:</h4>
        <ul>
          <ul>{this.state.borders.map((border) => {
              return <li>{border}</li>;
            })}</ul>
        </ul>
      </div>
    );
  }
}

export default CountryDetails;
