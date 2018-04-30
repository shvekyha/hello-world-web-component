import React, { Component } from 'react';
import './duc.css';

class Duc extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="ducRoot">
        <div>This is a Duc</div>
        <div>ducID: {this.props.duc.ID}</div> 
        <div>ducType:{this.props.duc.type}</div>
        <br />
      </div>
    );
  }
}
export default Duc;
