import { LightningElement, api, track } from 'lwc';

export default class TodoList extends LightningElement {
  @api cardTitle = 'Lista de tarefas'
  @track todoList = [
    'estudar LWC'
  ]
  todoText = ''

  handleTodoInputChange(event) {
    this.todoText = event.target.value.trim()
  }

  handleAddTodo() {
    if (!!this.todoText) {
      this.todoList.push(this.todoText)
      this.todoText = ''
    }
  }
}