class ToDo extends HTMLElement {
  todoItems = ["siema", "co tam", "elo"];

  counter = 0;

  get todoListItems() {
    return document.querySelectorAll(".todo-list__item input[type=checkbox]");
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header">
        <h3 class="header__text">Lista todo</h3>
        <h3 class="header__text" id="counter">Wykonane: ${this.counter}</h3>
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

  // onTodoItemCheck() {
  //   this.todoListItems.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       item.parentNode.classList.toggle("checked");
  //     });
  //   });
  // }

  onTodoItemCheck() {
    const node = document.querySelector("#counter");
    this.todoListItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.checked) {
          this.counter++;
        } else {
          this.counter--;
        }
        // item.parentNode.classList.toggle("checked");
        node.innerHTML = `Wykonano: ${this.counter}`;
      });
    });
  }
}

customElements.define("to-do", ToDo);
