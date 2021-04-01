import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo_src='./../../../../assets/logo/todo-logo2.webp'

  constructor() { }

  ngOnInit() {
  }

}
