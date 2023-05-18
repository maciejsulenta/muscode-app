class ProductList extends HTMLElement {
  connectedCallback() {
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
          <tr>
            <td class="table__id">0</td>
            <td class="table__name">iPhone 6s Plus 16GB</td>
            <td class="table__initial_price">649</td>
            <td class="table__price">1000</td>
            <td>$</td>
          </tr>
          <tr>
            <td class="table__id">1</td>
            <td class="table__name">iPad Pro 32GB</td>
            <td class="table__initial_price">600</td>
            <td class="table__price">800</td>
            <td>$</td>
          </tr>
          <tr>
            <td class="table__id">2</td>
            <td class="table__name">MacBook Pro</td>
            <td class="table__initial_price"></td>
            <td class="table__price">8000</td>
            <td>PLN</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

customElements.define("product-list", ProductList);
