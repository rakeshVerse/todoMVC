import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.displayTasks(this.model.tasks);

    this.view.bindAddTask(this.#handleAddTask);
    this.view.bindEditTask(this.#handleEditTask);
    this.view.bindDeleteTask(this.#handleDeleteTask);
    this.view.bindToggleTask(this.#handleToggleTask);
  }

  #handleAddTask = (taskText) => {
    this.model.addTask(taskText);
    this.view.displayTasks(this.model.tasks);
  };

  #handleEditTask = (id, updatedText) => {
    this.model.editTask(id, updatedText);
    this.view.displayTasks(this.model.tasks);
  };

  #handleDeleteTask = (id) => {
    this.model.deleteTask(id);
    this.view.displayTasks(this.model.tasks);
  };

  #handleToggleTask = (id) => {
    this.model.toggleTask(id);
    this.view.displayTasks(this.model.tasks);
  };
}

const app = new Controller(new Model(), new View());
console.log(app);
