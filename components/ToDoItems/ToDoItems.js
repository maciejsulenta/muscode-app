class ToDoItem extends HTMLElement {
  todoItems = this.getAttribute("items").split(",");

  static get observedAttributes() {
    return ["items"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    this.todoItems = newValue.split(",");

    this.innerHTML = `
      <ul class="todo-list">
        ${this.todoItems
          .map(
            (item, index) => `
            <li class="todo-list__item">
              <input type="checkbox" id="${index}">
              <label for="${index}">
                ${item}
              </label>
            </li>`
          )
          .join("")}
      </ul>
  `;
  }
}

customElements.define("todo-item", ToDoItem);
