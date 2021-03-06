class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('created tooltip');
    this.tooltipContainer_;
    this.tooltipText_ = 'some dummy tooltip text';
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
        div {
            background-color: black;
            color: white;
            position: absolute;
            z-index: 10;
        }

        ::slotted(.highlight) {
            border-bottom: 1px dotted blue;
        }

        :host {
            background: #ccc;
        }

        :host(.important) {
            background-color: red;
        }

        :host-context(p) {
            font-weight: bold;
        }
    </style>
    <slot>Some default</slot>
    <span> (?)</span>`;
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this.tooltipText_ = this.getAttribute('text');
    }
    const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this.showTooltip_.bind(this));
    tooltipIcon.addEventListener('mouseleave', this.hideTooltip_.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  showTooltip_() {
    this.tooltipContainer_ = document.createElement('div');
    this.tooltipContainer_.textContent = this.tooltipText_;
    this.shadowRoot.appendChild(this.tooltipContainer_);
  }

  hideTooltip_() {
    this.shadowRoot.removeChild(this.tooltipContainer_);
  }
}

customElements.define('huzhx-tooltip', Tooltip);
