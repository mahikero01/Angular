import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTitleRoutingModule } from './create_title-routing.module';

import { CreateTitleComponent } from './create_title.component';

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
