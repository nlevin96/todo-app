import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './../../modules/todo-list/todo-list.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule,
         MatIconModule,
         MatCheckboxModule,
         MatDialogModule, 
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DefaultComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  entryComponents:[]
})
export class DefaultModule { }
