import React, { Component } from 'react';
import './duc.css';

class Duc extends Component {
  
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onCheckChanged = this.onCheckChanged.bind(this);
    this.duc = this.props.duc;
  }

    onChange(e){
        let value = e.target.value;
        let id = e.target.id.split('_')[1];

        this.callDucValueChange(value, id);
    }

    onCheckChanged(e){
        let value = e.target.checked.toString();
        let id = e.target.id.split('_')[1];

        this.callDucValueChange(value, id);
    }

    callDucValueChange(value, id){
        //console.log(`callDucValueChange value: ${value} id: ${id}`);

        this.props.callBackOnDucValueChange({ ducValue: value, id: id });
    }

  render() {
    let elementID = `${this.duc.type}_${this.duc.ID}`;
    return(
        <div id="ducRoot">
            <div>This is a Duc (ID={this.duc.ID})</div> 
            <div>{this.duc.title}:
            {
                (this.duc.type === 'textbox')?
                    <input type="text" id={elementID} onChange={this.onChange}/> :
                (this.duc.type === 'ddl')?
                    <select id={elementID} onChange={this.onChange}>
                        {
                            this.duc.items.map((item) => <option value={item.value}>{item.text}</option>)
                        }
                    </select>:
                (this.duc.type === 'checkbox')?
                    <input type="checkbox" id={elementID} onChange={this.onCheckChanged}/>:
                'Duc type not supported!'
            }
            </div>
            <br />
        </div>
    );
  }
}
export default Duc;
