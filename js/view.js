export default class View {
  constructor() {
    this.initialView();
  }

  createElement(tag, className) {
    const ele = document.createElement(tag);
    if (className) ele.classList.add(className);
    return ele;
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  initialView() {
    this.root = this.getElement("#root");
    this.heading = this.createElement("h1");
    this.heading.textContent = "Todo - Hunt your tasks!";

    this.form = this.createElement("form");
    this.taskInput = this.createElement("input");
    this.taskInput.type = "text";
    this.taskInput.placeholder = "Enter task";
    this.taskInput.name = "todo";
    this.addTaskBtn = this.createElement("button");
    this.addTaskBtn.textContent = "Add Task";
    this.addTaskBtn.classList.add("btn");
    this.form.append(this.taskInput, this.addTaskBtn);

    this.taskList = this.createElement("ul");
    this.taskInfo = this.createElement("p");
    this.taskInfo.textContent = "It's empty here! Add your first task.";
    this.taskList.append(this.taskInfo);

    this.root.append(this.heading, this.form, this.taskList);
  }
}
