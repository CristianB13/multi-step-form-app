import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { FormRadioButtonComponent } from './components/form-radio-button/form-radio-button.component';
import { FormCheckboxButtonComponent } from './components/form-checkbox-button/form-checkbox-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepFormComponent,
    FormRadioButtonComponent,
    FormCheckboxButtonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
