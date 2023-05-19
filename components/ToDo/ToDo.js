class ToDo extends HTMLElement {
  todoItems = [];
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

      <todo-item></todo-item>

      <form class="todo-add">
        <span class="todo-add__icon">+</span>
        <input class="todo-add__input" type="text" placeholder="Dodaj nowy element checklisty">
      </form>
    `;

    this.addItem();
    this.checkItem();
  }

  addItem() {
    const todoList = document.querySelector("todo-item");
    const todoAdd = document.querySelector(".todo-add");
    const todoAddInput = document.querySelector(".todo-add__input");

    todoAdd.addEventListener("submit", (e) => {
      e.preventDefault();

      if (todoAddInput.value !== "") {
        const todoLength = this.todoItems.length;

        this.todoItems.push({
          id: todoLength ? todoLength : 0,
          name: todoAddInput.value,
          checked: false,
        });
      }

      todoList.setAttribute("items", JSON.stringify(this.todoItems));
      todoAddInput.value = "";

      this.checkItem();
    });
  }

  checkItem() {
    const counterNode = document.querySelector("#counter");

    this.todoItems.forEach((todoItem) => {
      this.todoListItems.forEach((item) => {
        if (todoItem.checked && todoItem.id === +item.id) {
          item.setAttribute("checked", true);
        }
      });
    });

    this.todoListItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const clickedElement = this.todoItems.find(
          (todo) => todo.id === +item.id
        );

        clickedElement.checked = e.target.checked;

        const uncheckedElements = this.todoItems.filter(
          (todo) => todo.id !== +item.id
        );

        const updatedList = [...uncheckedElements, clickedElement];

        this.counter = updatedList.filter((item) => item.checked).length;
        counterNode.innerHTML = `Wykonano: ${this.counter}`;
      });
    });
  }
}

customElements.define("to-do", ToDo);
