import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() counter: number = 0;

  @Output() changeCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiply() {
    this.counter *= 2;
  }

  divide() {
    this.counter /= 2;
  }

}
