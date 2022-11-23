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

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    GrandsonComponent,
    NavbarComponent,
    DefaultComponent,
    ReduxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
