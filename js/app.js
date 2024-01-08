import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
console.log(app);
