import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoPersoComponent } from './info/info-perso/info-perso.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPersoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
