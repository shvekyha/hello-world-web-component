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
        const shadowRootEl = this.attachShadow({mode: 'open'});
        const template = thisDocument.getElementById('hello-world');
        const clone = document.importNode(template.content, true);
        let ducList = [
          {ID:1,type: 'textbox'},
          {ID:3,type: 'ddl'},
          {ID:5,type: 'checkbox'}
        ];

        if (this.hasAttribute('ducList')) {
          ducList = this.getAttribute('ducList');
        }
        shadowRootEl.appendChild(clone);
        const internalRootEl = shadowRootEl.getElementById('root');
      debugger;
        render(
          <DucWrapper ducList={ducList}></DucWrapper>,
          shadowRootEl.getElementById('root'),
        );
        retargetEvents(shadowRootEl);
      }
    }
    window.customElements.define('hello-world', HelloWorld);
  });
})();
