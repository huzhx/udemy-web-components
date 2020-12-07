class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('created tooltip');
    this.tooltipContainer_;
    this.tooltipText_ = 'some dummy tooltip text';
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this.tooltipText_ = this.getAttribute('text');
    }
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = '(?)';
    tooltipIcon.addEventListener('mouseenter', this.showTooltip_.bind(this));
    tooltipIcon.addEventListener('mouseleave', this.hideTooltip_.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  showTooltip_() {
    this.tooltipContainer_ = document.createElement('div');
    this.tooltipContainer_.textContent = this.tooltipText_;
    this.tooltipContainer_.style.backgroundColor = 'black';
    this.tooltipContainer_.style.color = 'white';
    this.tooltipContainer_.style.position = 'absolute';
    this.tooltipContainer_.style.zIndex = '10';
    this.shadowRoot.appendChild(this.tooltipContainer_);
  }

  hideTooltip_() {
    this.shadowRoot.removeChild(this.tooltipContainer_);
  }
}

customElements.define('huzhx-tooltip', Tooltip);
