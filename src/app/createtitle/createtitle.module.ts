import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTitleRoutingModule } from './createTitle-routing.module';

import { CreateTitleComponent } from './createTitle.component';

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
