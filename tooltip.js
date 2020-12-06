class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('created tooltip');
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = '(?)';
    this.appendChild(tooltipIcon);
  }
}

customElements.define('huzhx-tooltip', Tooltip);
