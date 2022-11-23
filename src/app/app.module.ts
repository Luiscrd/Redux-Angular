import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './counter/children/children.component';
import { GrandsonComponent } from './counter/grandson/grandson.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
