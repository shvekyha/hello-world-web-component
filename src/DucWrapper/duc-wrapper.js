import React, { Component } from 'react';
import Duc from './Duc/duc';
import './duc-wrapper.css';

class DucWrapper extends Component {
  
  constructor(props) {
    super(props);
    // console.log('DucWrapper constructor: props.ducList: '+JSON.stringify(props.ducList));
    // console.log('DucWrapper constructor: props.color: '+props.color);
    this.state = {
        ducValueList:[]
    }

    this.onDucValueChange = this.onDucValueChange.bind(this);
  }

  onDucValueChange(data){
    //console.log('onDucValueChange success!! data: '+JSON.stringify(data));
    let list = [...this.state.ducValueList];

    let ducValue = list.find((item) => item.ID === data.ID);
    ducValue ? list.find((item) => item.ID === data.ID).ducValue = data.ducValue: list.push(data);

    this.setState({ducValueList: list});
  }

  render() {
    return(
      <div id="ducWrapperRoot">
        <div>This is DucWrapper</div><div>color: {this.props.color}</div>
        <div>
            {
                this.props && this.props.ducList && 
                this.props.ducList.map(duc => <Duc duc={duc} callBackOnDucValueChange={this.onDucValueChange}></Duc>)
            }
        </div>
        <div>Duc value list: (collected by wrapper)
        {
            this.state.ducValueList.map((item) => <div>ID:{item.ID}, value:{item.ducValue}</div>,)
        }
        </div>
      </div>
    );
  }
}
export default DucWrapper;
