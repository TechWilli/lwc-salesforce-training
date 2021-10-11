import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
  cardTitle = 'Lista de tarefas'
  todoText = ''
  @track todoList = [
    'estudar LWC'
  ]

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