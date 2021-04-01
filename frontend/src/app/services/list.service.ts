import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  REST_API: string = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.REST_API}`);
  }

  addTask(task_description) {
    return this.http.post(`${this.REST_API}`, {task: task_description}, {responseType: 'text'})
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTask(task_id, task_description, done) {
    let API_URL = `${this.REST_API}/${task_id}`;
    return this.http.put(API_URL, {task: task_description, done: done}, {responseType: 'text'});
  }

  deleteTask(task_id) {
    let API_URL = `${this.REST_API}/${task_id}`;
    return this.http.delete(API_URL, {responseType: 'text'}).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
