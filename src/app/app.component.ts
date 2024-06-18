import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskArray = [{taskName: "Brush teeth", isCompleted: false}];
  title = 'angularApp';

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value, 
      isCompleted: false,
    });
      // clear placeholder after submitting
      form.reset();
}
  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number){
    console.log(this.taskArray);
    //change value of boolean to opposite
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}