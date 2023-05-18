class ProductTiles extends HTMLElement {
  productTileData = [
    {
      id: "1",
      name: "iPhone 6s Plus 16GB",
      price: "649",
      initialPrice: "1000",
      currency: "$",
    },
    {
      id: "2",
      name: "iPad Pro 32GB",
      price: "600",
      initialPrice: "800",
      currency: "$",
    },
    {
      id: "3",
      name: "Macbook Pro",
      price: "8000",
      initialPrice: "",
      currency: "PLN",
    },
  ];

  constructor() {
    super();

    this.productTileData = this.productTileData.map((item) => ({
      ...item,
      promotion: item.initialPrice
        ? Math.floor(100 - (item.price / item.initialPrice) * 100)
        : "",
    }));
  }

  get modal() {
    return document.querySelector(".modal");
  }

  connectedCallback() {
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
          <p class="product-tile__price">${product.price} ${
           product.currency
         }</p>
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
      item.addEventListener("click", (e) => {
        [...item.children]
          .filter((item) => item.tagName !== "IMG")
          .map((child) => console.log(child.textContent));

        modal.setAttribute("item", JSON.stringify(this.productTileData[index]));

        this.modal.classList.toggle("modal--open");
      });
    });
  }
}

customElements.define("product-tiles", ProductTiles);
