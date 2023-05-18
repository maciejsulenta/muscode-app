class ToDo extends HTMLElement {
  todoItems = ["siema", "co tam", "elo"];

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
  }

  onTodoItemAdd() {
    // const todoList = document.querySelector(".todo-list");
    const todoAdd = document.querySelector(".todo-add");
    const todoAddInput = document.querySelector(".todo-add__input");

    todoAdd.addEventListener("submit", (e) => {
      e.preventDefault();

      this.todoItems.push(todoAddInput.value);
      // this.todoItems(this.todoItems.push(todoAddInput.value));

      console.log(this.todoItems);
      // let todoListItem = document.createElement("li");

      // todoListItem.className = "todo-list__item";

      // todoList.append(todoListItem);

      todoAddInput.value = "";
    });
  }
}

customElements.define("to-do", ToDo);

// ${todoItems
//   .map(
//     (item, index) => `
//     <li class="todo-list__item">
//       <input type="checkbox" id="${index}">
//       <label for="${index}">
//         ${item}
//       </label>
//     </li>`
//   )
//   .join("")}
