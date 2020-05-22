import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public todoArray = [];
  public inputText = '';
  public updateText = '';

  public addTodo() {
    console.log('from input ->', this.inputText);
    const todoObj = {
      todo: this.inputText,
      isDone: false,
      id: '',
      updateThis: false
    };

    this.todoArray.push(todoObj);
    this.inputText = '';
    console.log(this.todoArray);
  }

  public removeTodo(id: number) {
    console.log('removed this ->', this.todoArray[id]);
    this.todoArray.splice(id, 1);
    console.log(this.todoArray);
  }

  public markAsDone(id: number) {
    this.todoArray[id]['isDone'] = true;
    console.log('this is done ->', this.todoArray[id]);
    this.marking(id);
  }

  public update(id: number) {
    this.todoArray[id]['todo'] = this.updateText;
    this.todoArray[id]['updateThis'] = false;
    this.updateText = '';

    console.log(this.todoArray);
    console.log('updating this ->', this.todoArray[id]);
  }

  public updateTodo(id: number) {
    this.todoArray[id]['updateThis'] = !this.todoArray[id]['updateThis'];
    console.log('update todo ->', this.todoArray[id]);
  }

  public marking(id: number) {
    let listItems;
    listItems = document.querySelectorAll('.inputTodo');
    console.log(listItems[id]);
    listItems[id].style.color = 'red';
  }
}
