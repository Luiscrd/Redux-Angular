import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from 'src/app/counter/counter.actions';

interface AppState {
  count: number
}

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

    this.store.subscribe(state => {

      this.counter = state.count;

    })
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
