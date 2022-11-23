import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenReduxComponent } from './children-redux.component';

describe('ChildrenReduxComponent', () => {
  let component: ChildrenReduxComponent;
  let fixture: ComponentFixture<ChildrenReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenReduxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
