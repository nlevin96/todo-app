import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  newTasksDataSource= new MatTableDataSource<any>();
  oldTasksDataSource = new MatTableDataSource<any>();

  data: any;

  new_task;

  displayedColumns: string[] = ['task', 'Delete'];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.updateTasks();
  }

  updateTasks() {
    this.listService.getTasks().subscribe(response => {
      const allTasks = [];
      this.data = response;
      this.data.forEach(element => {
        allTasks.push(element);
      });
      this.newTasksDataSource.data = allTasks.filter(element => element.done === 0);
      this.oldTasksDataSource.data = allTasks.filter(element => element.done === 1);
    });   
  }

  checkTask(element) {
    this.listService.updateTask(element.id, element.task, 1 - element.done).subscribe(data => {
      console.log(data);
      this.updateTasks();
    })
  }

  deleteTask(element) {
    this.listService.deleteTask(element.id).subscribe(data => {
      console.log(data);
      this.updateTasks();
    })
  }

  addTask() {
    this.listService.addTask(this.new_task).subscribe(data => {
      console.log(data);
      this.new_task = '';
      this.updateTasks();
    })
  }
}
