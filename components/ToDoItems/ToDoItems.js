class ToDoItem extends HTMLElement {
  todoItems = this.getAttribute("items");

  static get observedAttributes() {
    return ["items"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    this.todoItems = JSON.parse(newValue);

    this.innerHTML = `
      <ul class="todo-list">
        ${this.todoItems
          .map(
            (item, index) => `
            <li class="todo-list__item">
              <input type="checkbox" id="${index}">
              <label for="${index}">
                ${item.name}
              </label>
            </li>`
          )
          .join("")}
      </ul>
  `;
  }
}

customElements.define("todo-item", ToDoItem);
