class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (event) => {
      if (!confirm('Do you really want to leave?')) {
        event.preventDefault();
      }
    });
  }
}

// need to pass in the 3rd parameter {extends: 'a'}, since this class doesn't extend the generic HTMLElement
customElements.define('huzhx-confirm-link', ConfirmLink, { extends: 'a' });
