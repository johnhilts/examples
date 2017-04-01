import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0, };
  }

  clickHandler() {
    let counter = this.state.counter + 1;
    this.setState({counter: counter}, this.processCounter)
  }

  processCounter() {
    PubSub.publish('COUNTER', this.state.counter)
  }

  render() {
    return (
      <div style={{borderWidth: 2, borderColor: 'black', borderStyle: 'solid', width: '50pc', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', }}>
        <div>this section inside the button component</div>
        <div>
          <button type='submit' onClick={this.clickHandler.bind(this)}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default Button;
