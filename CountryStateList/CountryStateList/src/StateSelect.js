import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

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
    let selectedCountry = data;
    axios.get(`http://127.0.0.10/api/jurisdiction/states/${selectedCountry}`)
      .then((response) => this.setState({selectedCountry: selectedCountry, stateList: response.data.map(this.mapStates)}))
  }

  // mapping from server properties to client properties
  mapStates(state) {
    return {value: state.Id, name: state.Name, }
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
