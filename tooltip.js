class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('created tooltip');
  }
}

customElements.define('huzhx-tooltip', Tooltip);
