import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
  {
    path: 'zaloguj',
    component: FormComponent,
  },
  {
    path: '**',
    component: InitialComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
