import React, { Component } from 'react';
import Duc from './Duc/duc';
import './duc-wrapper.css';

class DucWrapper extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="ducWrapperRoot">
        <div>This is DucWrapper</div>
            {
                this.props && this.props.ducList && 
                this.props.ducList.map(duc => <Duc duc={duc}></Duc>)
            }
      </div>
    );
  }
}
export default DucWrapper;
