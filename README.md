# Todo app using MVC architecture

### Model Class

```plaintext
+--------------------------------------+
|                Model                 |
+--------------------------------------+
| - tasks: Task[]                      |
+--------------------------------------+
| + constructor()                      |
| + addTask(text: string)              |
| + editTask(id: string, updatedText: string) |
| + deleteTask(id: string)             |
| + toggleTask(id: string)             |
| - #updateLocalStorage()              |
+--------------------------------------+
```

### View Class

```plaintext
+--------------------------------------+
|                View                  |
+--------------------------------------+
| - root: HTMLElement                  |
| - heading: HTMLElement               |
| - form: HTMLElement                  |
| - taskInput: HTMLElement             |
| - addTaskBtn: HTMLElement            |
| - taskList: HTMLElement              |
+--------------------------------------+
| + constructor()                      |
| - #createElement(tag, className)     |
| - #getElement(selector)               |
| - #renderInitialView()                |
| + taskInputText: string               |
| - #resetInput()                       |
| + displayTasks(tasks: Task[])        |
| + bindAddTask(handler: Function)     |
| + bindEditTask(handler: Function)    |
| + bindDeleteTask(handler: Function)  |
| + bindToggleTask(handler: Function)  |
+--------------------------------------+
```

### Controller Class

```plaintext
+--------------------------------------+
|             Controller               |
+--------------------------------------+
| - model: Model                       |
| - view: View                         |
+--------------------------------------+
| + constructor(model: Model, view: View)|
| - #handleAddTask(taskText: string)    |
| - #handleEditTask(id: string, updatedText: string) |
| - #handleDeleteTask(id: string)       |
| - #handleToggleTask(id: string)       |
+--------------------------------------+
```
