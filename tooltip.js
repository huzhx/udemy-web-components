class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('created tooltip');
    this.tooltipContainer_;
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = '(?)';
    tooltipIcon.addEventListener('mouseenter', this.showTooltip_.bind(this));
    tooltipIcon.addEventListener('mouseleave', this.hideTooltip_.bind(this));
    this.appendChild(tooltipIcon);
  }

  showTooltip_() {
    this.tooltipContainer_ = document.createElement('div');
    this.tooltipContainer_.textContent = 'This is the tooltip text!';
    this.appendChild(this.tooltipContainer_);
  }

  hideTooltip_() {
    this.removeChild(this.tooltipContainer_);
  }
}

customElements.define('huzhx-tooltip', Tooltip);
