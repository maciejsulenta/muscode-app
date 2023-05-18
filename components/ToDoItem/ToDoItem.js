class ToDoItem extends HTMLElement {
  // get todoItems() {
  //   return this.attributes.items.value.split(",");
  // }

  connectedCallback() {
    const todoItems = this.attributes.items.value.split(",");
    // const todoItems = this.attributes;
    // const index = JSON.parse(this.attributes.index.value);
    // const itemek = JSON.parse(this.attributes.todoItem.value);
    // let index = JSON.parse(this.attributes.indexior.value);

    // console.log(JSON.parse(this.attributes.index.value));

    // console.log(this.attributes.items.value);
    console.log(this.attributes.items.value.split(","));

    this.innerHTML = `
        <ul class="todo-list">
           ${todoItems
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
