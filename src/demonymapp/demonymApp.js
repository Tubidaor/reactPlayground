import React, { Component } from 'react';

import Demonym from './demonym';
import CountrySelector from './countrySelector';
// import { join } from 'path';

class DemonymApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
    .then(response => {
      if(!response.ok) {
        console.log('an error ocurred');
        throw new Error('something went wrong');
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
      const countries = Object.keys(data)
        .map(key => data[key].item[0]);
        this.setState({
          countries,
          error: null
        });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }
  render() {
    const demon = this.state.selected
      ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
      : <div className="demonym_app__placeholder">Select a country above</div>;

      const error = this.state.error
      ? <div className="demonym_app_error">{this.state.error}</div>
      : "";
    return (
      <div className="demonym_app">

        {error}
        <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)}/>
        {demon}
      </div>
    );
  }
}

export default DemonymApp;