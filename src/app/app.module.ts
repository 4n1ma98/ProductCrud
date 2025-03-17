import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecComponent } from './Components/homec/homec.component';
import { ListcComponent } from './Components/listc/listc.component';
import { RegistrationcComponent } from './Components/registrationc/registrationc.component';
import { UpdatecComponent } from './Components/updatec/updatec.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomecComponent,
    ListcComponent,
    RegistrationcComponent,
    UpdatecComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
