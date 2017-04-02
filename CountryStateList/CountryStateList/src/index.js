import React from 'react';
import ReactDOM from 'react-dom';
import CountrySelect from './CountrySelect';
import StateSelect from './StateSelect';

let states = document.getElementById('states');
ReactDOM.render(
  <StateSelect {...(states.dataset)} />,
  states
);

let countries = document.getElementById('countries');
ReactDOM.render(
  <CountrySelect {...(countries.dataset)} />,
  countries
);
