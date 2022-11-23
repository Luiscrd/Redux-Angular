import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './counter/children/children.component';
import { GrandsonComponent } from './counter/grandson/grandson.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './pages/default/default.component';
import { ReduxComponent } from './pages/redux/redux.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { ChildrenReduxComponent } from './counter/children-redux/children-redux.component';
import { GrandsonReduxComponent } from './counter/grandson-redux/grandson-redux.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    GrandsonComponent,
    NavbarComponent,
    DefaultComponent,
    ReduxComponent,
    ChildrenReduxComponent,
    GrandsonReduxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
