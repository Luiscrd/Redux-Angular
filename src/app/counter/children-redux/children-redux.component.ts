import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { divide, multipy } from '../counter.actions';

@Component({
  selector: 'app-children-redux',
  templateUrl: './children-redux.component.html',
  styleUrls: ['./children-redux.component.css']
})
export class ChildrenReduxComponent implements OnInit {

 counter: number = 0;

  constructor(

    private store: Store<AppState>

  ) { }

  ngOnInit(): void {

    this.store.select('count').subscribe(counter => this.counter = counter);
  }

  multiply(num: number) {

    this.store.dispatch(multipy({num}));

  }

  divide(num: number) {

    this.store.dispatch(divide({num}));

  }

}
