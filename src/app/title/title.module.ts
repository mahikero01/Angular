import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleRoutingModule } from './title-routing.module';

import { TitleComponent } from './title.component';
import { TitleDetailsComponent } from './title-details/title-details.component';

import { TitlesService } from '../services/titles.service';

@NgModule({
    imports: [
        CommonModule,
        TitleRoutingModule
    ],
    declarations: [
        TitleComponent,
        TitleDetailsComponent
    ],
    providers: [
        TitlesService
    ],
    exports: [
        TitleComponent
    ]
  })
  
  export class TitleModule { }