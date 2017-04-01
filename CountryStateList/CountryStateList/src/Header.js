import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {headerCounter: 0};
  }

  componentDidMount() {
    this.token = PubSub.subscribe('COUNTER', this.subscriber.bind(this))
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  subscriber(msg, data) {
    console.log(`logging msg in subscriber: ${msg}`);
    console.log(`logging data in subscriber: ${data}`);
    let headerCounter = this.state.headerCounter + 1;
    this.setState({headerCounter: headerCounter,})
  }

  render() {
    return (
      <div style={{borderWidth: 2, borderColor: 'black', borderStyle: 'solid', width: '50pc', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', marginBottom: '10px', }}>
        <div>this section inside the header component</div>
        <div>Counter: {this.state.headerCounter}</div>
      </div>
    );
  }
}

export default Header;
