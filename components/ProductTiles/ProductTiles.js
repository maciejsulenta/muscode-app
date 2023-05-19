class ProductTiles extends HTMLElement {
  constructor() {
    super();
    this.productTileData = JSON.parse(this.getAttribute("products"));

    document
      .querySelector("product-list")
      .setAttribute("products", JSON.stringify(this.productTileData));
  }

  get modal() {
    return document.querySelector(".modal");
  }

  static get observedAttributes() {
    return ["products"];
  }

  attributeChangedCallback(productName, oldValue, newValue) {
    this.productTileData = JSON.parse(newValue);

    this.innerHTML = `
      ${this.productTileData
        .map(
          (product, index) => `
            <div class="product-tile">
            <h3 class="product-tile__text">${product.name}</h3>
          ${
            product.promotion &&
            `<div class="product-tile__promotion">${product.promotion}%</div>`
          }
          <img class="product-tile__image" src="../assets/img${
            index + 1
          }.png" alt="${product.name}"/>
        <p class="product-tile__price">${product.price} ${product.currency}</p>
        ${
          product.promotion &&
          `<p class="product-tile__initial-price">${product.initialPrice} ${product.currency}</p>`
        }
      </div>`
        )
        .join("")}
     `;

    this.handleModal();
  }

  handleModal() {
    const tile = document.querySelectorAll(".product-tile");
    const modal = document.querySelector("modal-app");

    tile.forEach((item, index) => {
      item.addEventListener("click", () => {
        modal.setAttribute("item", JSON.stringify(this.productTileData[index]));

        this.modal.classList.toggle("modal--open");
      });
    });
  }
}

customElements.define("product-tiles", ProductTiles);
