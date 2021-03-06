import React, { Component } from 'react';
import Block from './Block';
import './index.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.state = {
      flowerText: '',
    }
   // debugger;
    this.color = props.color;
  }
  changeText(text) {
    this.setState({
      flowerText: text,
    });
  }
  render() {
    const { changeText } = this;
    const { flowerText } = this.state;
    const { color } = this;
    debugger;
    return(
      <div id="appRoot">
        <Block color={color} text="Red Rose" changeText={changeText} />
        <Block color="blue" text="Blue Iris" changeText={changeText} />
        <div id="appRoot__flower">{flowerText}</div>
      </div>
    );
  }
}
export default App;
