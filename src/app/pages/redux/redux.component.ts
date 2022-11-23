import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {
  counter: number;

  constructor() {

    this.counter = 10;

  }
  ngOnInit(): void {

  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

}
