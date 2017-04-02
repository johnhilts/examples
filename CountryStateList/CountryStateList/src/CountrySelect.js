import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class CountrySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedCountry: props.selectedCountry, countryList: JSON.parse(props.countryList), };
    PubSub.publish('SELECTED-COUNTRY', this.state.selectedCountry)
  }

  render() {
    return (
      <select>
        {this.state.countryList.map(x => {
            let selected = x.value === this.state.selectedCountry;
            if (selected) {
              return <option key={x.value} value={x.value} selected>{x.name}</option>
            }
            else {
              return <option key={x.value} value={x.value}>{x.name}</option>
            }
          })
        }
      </select>
    );
  }
}

export default CountrySelect;
