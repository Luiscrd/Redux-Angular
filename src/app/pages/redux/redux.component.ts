import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { decrement, increment } from 'src/app/counter/counter.actions';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {

  counter: number = 10;

  constructor(

    private store: Store<AppState>

  ) {

    this.store.select('count').subscribe(counter => this.counter = counter);

  }

  ngOnInit(): void {

  }

  increment() {

    this.store.dispatch(increment());

  }

  decrement() {

    this.store.dispatch(decrement());

  }

}
