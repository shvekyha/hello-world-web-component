import React from 'react';
import { render } from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import DucWrapper from './DucWrapper/duc-wrapper';

(function() {
  const thisDocument = document.currentScript.ownerDocument;
  window.addEventListener('WebComponentsReady', () => {
    class HelloWorld extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback(){

        const shadowRootEl = this.attachShadow({mode: 'open'});
        const template = thisDocument.getElementById('hello-world');

        const clone = document.importNode(template.content, true);      
        
        let ducList = [
          {ID:1, title: 'Branch Name', type: 'textbox'},
          {ID:3, title: 'Paper Type', type: 'ddl', items:[{value:'Matt',text:'Matt'},{value:'Premium',text:'Premium'},{value:'Gloss',text:'Gloss'}]},
          {ID:5, title: 'Expedite Order', type: 'checkbox'}
        ];

        if (this.hasAttribute('ducList')) {
          ducList = JSON.parse(this.getAttribute('ducList'));
        }

        let color = 'red';
        if (this.hasAttribute('color')) {
          color = this.getAttribute('color');
        }

        shadowRootEl.appendChild(clone);
        const internalRootEl = shadowRootEl.getElementById('root');
        //debugger;
        render(
          <DucWrapper ducList={ducList} color={color} callBackOnChanged={this.OnChanged} parent={this}></DucWrapper>,
          shadowRootEl.getElementById('root'),
        );

        retargetEvents(shadowRootEl);
      }

      OnChanged(ducValueList){
        let event = new CustomEvent('OnDucChanged', { detail: ducValueList });
        this.parent.dispatchEvent(event);
      }

    }
    window.customElements.define('hello-world', HelloWorld);
  });
})();
