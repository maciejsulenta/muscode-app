class ProductList extends HTMLElement {
  static get observedAttributes() {
    return ["products"];
  }

  attributeChangedCallback(productName, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    const productsList = JSON.parse(newValue);

    this.innerHTML = `
    <h3 class="product-list__title">Lista Produktów</h3>

    <table>
      <thead>
        <tr>
          <th class="table__id">#</th>
          <th class="table__name">NAZWA</th>
          <th>PROMOCYJNA CENA</th>
          <th>CENA</th>
          <th>WALUTA</th>
        </tr>
      </thead>
      <tbody>
      ${productsList.map((product) => `
        <tr>
          <td class="table__id">${product.id}</td>
          <td class="table__name">${product.name}</td>
          <td class="table__initial_price">${product.price}</td>
          <td class="table__price">${product.initialPrice}</td>
          <td>${product.currency}</td>
        </tr>
      `).join('')}
      </tbody>
    </table>
  `;
  }
}

customElements.define("product-list", ProductList);
