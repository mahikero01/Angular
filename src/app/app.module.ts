import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Ng2Datetime } from 'ng2-datetime-picker';
import { AppRoutingModule } from './app-routing.module';
import { TitleModule } from './title/title.module';
import { CreateTitleModule } from './createtitle/createtitle.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TitleModule,
    CreateTitleModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
