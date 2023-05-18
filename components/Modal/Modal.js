class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside class="modal">
      <div class="modal__backdrop"></div>

      <div class="modal__content">
        <h3 class="modal__title">Edycja produktu: iPhone 6s Plus 16GB</h3>
        <img class="modal__image" src="../../assets/img1.png" alt="iPhone 6s Plus 16GB"/>

        <form class="modal-form">
          <div class="modal-form__item">
            <label class="modal-form__label" for="name">
              Nazwa produktu
            </label>
            <input class="modal-form__input" id="name" type="text" value="iPhone 6s Plus 16GB">
          </div>

          <div class="modal-form__item">
            <label class="modal-form__label" for="initial-price">
              Cena
            </label>
            <input class="modal-form__input" id="initial-price" type="number" value="1000">
          </div>

          <div class="modal-form__item">
            <label class="modal-form__label" for="price">
              Promocyjna cena
            </label>
            <input class="modal-form__input" id="price" type="number" value="649">
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
