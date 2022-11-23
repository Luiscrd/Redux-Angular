import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandsonReduxComponent } from './grandson-redux.component';

describe('GrandsonReduxComponent', () => {
  let component: GrandsonReduxComponent;
  let fixture: ComponentFixture<GrandsonReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandsonReduxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandsonReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
