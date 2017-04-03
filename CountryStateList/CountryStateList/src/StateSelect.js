import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class StateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedCountry: props.selectedCountry, stateList: JSON.parse(props.stateList), };
  }

  componentDidMount() {
    this.token = PubSub.subscribe('SELECTED-COUNTRY', this.subscriber.bind(this))
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  subscriber(msg, data) {
    console.log(`logging msg in subscriber: ${msg}`);
    console.log(`logging data in subscriber: ${data}`);
    // make ajax call here to get updated list of states, based on country ; use http://127.0.0.10/api/jurisdiction/states/us
    this.setState({selectedCountry: data,})
  }

  render() {
    return (
      <select>
        <option value=''>Please select state/province</option>
        {this.state.stateList.map(x=><option key={`${this.state.selectedCountry}-${x.value}`} value={x.value}>{x.name}</option>)}
      </select>
    );
  }
}

export default StateSelect;
