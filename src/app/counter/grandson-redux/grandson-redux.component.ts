import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandson-redux',
  templateUrl: './grandson-redux.component.html',
  styleUrls: ['./grandson-redux.component.css']
})
export class GrandsonReduxComponent implements OnInit {

  counter: number = 0;

  constructor(

    private store: Store<AppState>

  ) { }

  ngOnInit(): void {

    this.store.select('count').subscribe(counter => this.counter = counter);

  }

  reset(num: number){

    this.store.dispatch(reset({num}));

  }

}
