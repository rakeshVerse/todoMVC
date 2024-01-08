export default class View {
  constructor() {
    this.#renderInitialView();
  }

  #createElement(tag, className) {
    const ele = document.createElement(tag);
    if (className) ele.classList.add(className);
    return ele;
  }

  #getElement(selector) {
    return document.querySelector(selector);
  }

  #renderInitialView() {
    this.root = this.#getElement("#root");
    this.heading = this.#createElement("h1");
    this.heading.textContent = "Todo - Hunt your tasks!";

    this.form = this.#createElement("form");
    this.taskInput = this.#createElement("input");
    this.taskInput.type = "text";
    this.taskInput.placeholder = "Enter task";
    this.taskInput.name = "todo";
    this.addTaskBtn = this.#createElement("button");
    this.addTaskBtn.textContent = "Add Task";
    this.addTaskBtn.classList.add("btn");
    this.form.append(this.taskInput, this.addTaskBtn);

    this.taskList = this.#createElement("ul");

    this.root.append(this.heading, this.form, this.taskList);
  }

  get taskInputText() {
    return this.taskInput.value.trim();
  }

  #resetInput() {
    this.taskInput.value = "";
  }

  displayTasks(tasks) {
    this.taskList.textContent = "";

    if (!tasks.length) {
      const taskInfo = this.createElement("p");
      taskInfo.textContent = "It's empty here! Add your first task.";
      this.taskList.append(taskInfo);
      return;
    }

    tasks.forEach((task) => {
      const li = this.#createElement("li");
      li.id = task.id;

      const taskCheck = this.#createElement("input");
      taskCheck.type = "checkbox";
      taskCheck.name = "check-done";
      taskCheck.id = "check-done";
      taskCheck.checked = task.taskDone;

      const taskText = this.#createElement("span");
      taskText.contentEditable = true;
      if (task.taskDone) {
        const strike = this.#createElement("s");
        strike.textContent = task.task;
        taskText.append(strike);
      } else {
        taskText.textContent = task.task;
      }

      const deleteBtn = this.#createElement("a");
      deleteBtn.href = "#";
      deleteBtn.textContent = "Delete";

      li.append(taskCheck, taskText, deleteBtn);

      this.taskList.append(li);
    });
  }

  // Events
  bindAddTask(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const input = this.taskInputText;
      if (!input) return;

      handler(input);
      this.#resetInput();
    });
  }

  bindEditTask(handler) {
    this.taskList.addEventListener("focusout", (e) => {
      const updatedText = e.target.textContent.trim();
      if (e.target.tagName !== "SPAN" || updatedText === "") return;

      const id = e.target.parentElement.id;
      handler(id, updatedText);
    });
  }

  bindDeleteTask(handler) {
    this.taskList.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") return;

      const id = e.target.parentElement.id;
      handler(id);
    });
  }

  bindToggleTask(handler) {
    this.taskList.addEventListener("change", (e) => {
      if (e.target.type !== "checkbox") return;

      const id = e.target.parentElement.id;
      handler(id);
    });
  }
}
