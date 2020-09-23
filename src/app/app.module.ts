import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FormComponent,
    InitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
