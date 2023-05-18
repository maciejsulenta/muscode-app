class Title extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1 class="title">Muscode App</h1>
      `;
  }
}

customElements.define("app-title", Title);
