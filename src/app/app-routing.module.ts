import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { ReduxComponent } from './pages/redux/redux.component';

const routes: Routes = [
  {path: 'default', component: DefaultComponent},
  {path: 'redux', component: ReduxComponent},
  {path: '**', redirectTo: 'default', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
