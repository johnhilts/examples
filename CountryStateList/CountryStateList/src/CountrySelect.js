import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import {constants} from './constants';

class CountrySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedCountry: props.selectedCountry, countryList: JSON.parse(props.countryList), };
    this.notifyCountrySelectionChange(this.state.selectedCountry);
  }

  countryChangeHandler(event) {
    let selectedCountry = event.target.value;
    console.log(`country changed to ${selectedCountry}`)
    this.setState({selectedCountry: selectedCountry, }, this.notifyCountrySelectionChange.bind(null, selectedCountry));
  }

  notifyCountrySelectionChange(selectedCountry) {
    PubSub.publish(constants.selected_country_topic, selectedCountry)
  }

  render() {
    return (
      <select onChange={this.countryChangeHandler.bind(this)} defaultValue={this.state.selectedCountry}>
        {this.state.countryList.map(x => <option key={x.value} value={x.value}>{x.name}</option>)}
      </select>
    );
  }
}

export default CountrySelect;
