class Modal extends HTMLElement {
  static get observedAttributes() {
    return ["item"];
  }

  attributeChangedCallback(productName, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    const { id, name, price, initialPrice, currency } =
      JSON.parse(newValue);

    this.innerHTML = `
      <aside class="modal">
      <div class="modal__backdrop"></div>

      <div class="modal__content">
        <h3 class="modal__title">Edycja produktu: ${name}</h3>
        <img class="modal__image" src="../../assets/img${id}.png" alt="${name}"/>

        <form class="modal-form">
          <div class="modal-form__item">
            <label class="modal-form__label" for="name">
              Nazwa produktu
            </label>
            <input class="modal-form__input" id="name" type="text" value="${name}">
          </div>

          <div class="modal-form__item">
            <label class="modal-form__label" for="initial-price">
              Cena
            </label>
            <input class="modal-form__input" id="initial-price" type="number" value="${initialPrice}">
          </div>

          <div class="modal-form__item">
            <label class="modal-form__label" for="price">
              Promocyjna cena
            </label>
            <input class="modal-form__input" id="price" type="number" value="${price}">
          </div>

          <div class="modal-form__item">
            <label class="modal-form__label" for="currency">
              Waluta
            </label>
            <select class="modal-form__input" id="currency">
              <option value="$">$</option>
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </form>

        <div class="buttons-wrap">
          <button class="modal__button modal__button--dark">Zapisz</button>
          <button class="modal__button">Anuluj</button>
        </div>
      </div>
    </aside>
  `;

    this.handleModal();
  }

  init() {
    console.log(this.getAttribute("item"));
  }

  handleModal() {
    const modal = document.querySelector(".modal");
    const backdrop = document.querySelector(".modal__backdrop");

    backdrop.addEventListener("click", () => {
      modal.classList.remove("modal--open");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("modal--open")) {
        modal.classList.remove("modal--open");
      }
    });
  }
}

customElements.define("modal-app", Modal);
