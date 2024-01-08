export default class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask(text) {
    this.tasks.push({ id: Date.now().toString(36), task: text, taskDone: false });
    this.#updateLocalStorage();
  }

  editTask(id, updatedText) {
    this.tasks.forEach((task) => {
      if (task.id === id) task.task = updatedText;
    });
    this.#updateLocalStorage();
  }

  deleteTask(id) {
    const deleteIndex = this.tasks.findIndex((task) => task.id === id);
    if (deleteIndex !== -1) this.tasks.splice(deleteIndex, 1);
    this.#updateLocalStorage();
  }

  toggleTask(id) {
    this.tasks.forEach((task) => {
      if (task.id === id) task.taskDone = !task.taskDone;
    });
    this.#updateLocalStorage();
  }

  #updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
