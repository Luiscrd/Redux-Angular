import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

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
