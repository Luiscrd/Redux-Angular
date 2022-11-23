import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grandson-redux',
  templateUrl: './grandson-redux.component.html',
  styleUrls: ['./grandson-redux.component.css']
})
export class GrandsonReduxComponent implements OnInit {

  @Input() counter: number = 0;

  @Output() changeCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  reset(number: number){
    this.counter = number;
    this.changeCounter.emit(number);
  }

}
