import React from 'react';
import { render } from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import App from './App';

(function() {
  const thisDocument = document.currentScript.ownerDocument;
  window.addEventListener('WebComponentsReady', () => {
    class HelloWorld extends HTMLElement {
      constructor() {
        super();
        const shadowRootEl = this.attachShadow({mode: 'open'});
        const template = thisDocument.getElementById('hello-world');
        const clone = document.importNode(template.content, true);
        var color = 'yellow';

        if (this.hasAttribute('color2')) {
          color = this.getAttribute('color2');
        }
        shadowRootEl.appendChild(clone);
        const internalRootEl = shadowRootEl.getElementById('root');
     // debugger;
        render(
          <App color={color} />,
          shadowRootEl.getElementById('root'),
        );
        retargetEvents(shadowRootEl);
      }
    }
    window.customElements.define('hello-world', HelloWorld);
  });
})();
