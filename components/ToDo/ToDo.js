class ToDo extends HTMLElement {
  todoItems = ["siema", "co tam", "elo"];

  get todoListItems() {
    return document.querySelectorAll(".todo-list__item input[type=checkbox]");
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header">
        <h3 class="header__text">Lista todo</h3>
        <h3 class="header__text">Wykonane: 0</h3>
      </div>

      <todo-item items="${this.todoItems}"></todo-item>

      <form class="todo-add">
        <span class="todo-add__icon">+</span>
        <input class="todo-add__input" type="text" placeholder="Dodaj nowy element checklisty">
      </form>
    `;

    this.onTodoItemAdd();
    this.onTodoItemCheck();
  }

  onTodoItemAdd() {
    const todoList = document.querySelector("todo-item");
    const todoAdd = document.querySelector(".todo-add");
    const todoAddInput = document.querySelector(".todo-add__input");

    todoAdd.addEventListener("submit", (e) => {
      e.preventDefault();

      if (todoAddInput.value !== "") {
        this.todoItems.push(todoAddInput.value);
      }

      todoList.setAttribute("items", this.todoItems);
      todoAddInput.value = "";

      this.onTodoItemCheck();
    });
  }

  onTodoItemCheck() {
    this.todoListItems.forEach((item) => {
      item.addEventListener("click", () => {

        this.counter++;
        item.parentNode.classList.toggle("checked");
      });
    });
  }
}

customElements.define("to-do", ToDo);
