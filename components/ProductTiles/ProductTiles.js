class ProductTiles extends HTMLElement {
  get modal() {
    return document.querySelector(".modal");
  }
  // get tile() {
  //   return document.getElementById("siema");
  // }

  connectedCallback() {
    this.innerHTML = `
      <div class="product-tile">
        <h3 class="product-tile__text">iPhone 6s Plus 16GB</h3>
        <div class="product-tile__promotion">-35%</div>
        <img class="product-tile__image" src="../assets/img1.png" alt="iPhone 6s Plus"/>
        <p class="product-tile__price">649 $</p>
        <p class="product-tile__initial-price">1000 $</p>
      </div>

      <div class="product-tile">
        <h3 class="product-tile__text">iPad Pro 32GB</h3>
        <div class="product-tile__promotion">-25%</div>
        <img class="product-tile__image" src="../assets/img2.png" alt="iPad Pro 32GB"/>
        <p class="product-tile__price">600 $</p>
        <p class="product-tile__initial-price">800 $</p>
      </div>

      <div class="product-tile" id="siema">
        <h3 class="product-tile__text">MacBook Pro</h3>
        <img class="product-tile__image" src="../assets/img3.png" alt="MacBook Pro"/>
        <p class="product-tile__price">8000 PLN</p>
        <p class="product-tile__initial-price"></p>
      </div>
    `;

    this.handleModal();
  }

  handleModal() {
    const tile = document.getElementById('siema');

    tile.addEventListener("click", (e) => {
      console.log(this.modal);
      this.modal.classList.toggle("modal--open");
    });
  }
}

customElements.define("product-tiles", ProductTiles);
