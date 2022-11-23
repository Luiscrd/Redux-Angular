import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children-redux',
  templateUrl: './children-redux.component.html',
  styleUrls: ['./children-redux.component.css']
})
export class ChildrenReduxComponent implements OnInit {

 counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  multiply() {

  }

  divide() {

  }

}
