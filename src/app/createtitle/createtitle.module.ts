import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTitleRoutingModule } from './createtitle-routing.module';

import { CreateTitleComponent } from './createtitle.component';

@NgModule({
  imports: [
    CommonModule,
    CreateTitleRoutingModule
  ],
  declarations: [
    CreateTitleComponent
  ],
  providers:[],
  exports: [
    CreateTitleComponent
  ]
})
export class CreateTitleModule { }
