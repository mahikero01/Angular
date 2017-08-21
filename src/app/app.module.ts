import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Ng2Datetime } from 'ng2-datetime-picker';
import { AppRoute } from './app.routes';
import { TitleModule } from './title/title.module';

import { AppComponent } from './app.component';
import { CreateTitleComponent } from './create-title/create-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTitleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoute,
    TitleModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
