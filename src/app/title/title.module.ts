import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleRoutes } from './title.routes';

import { TitleComponent } from './title.component';
import { TitleDetailsComponent } from './title-details/title-details.component';
import { TitleService } from '../services/title.service';

@NgModule({
    declarations: [
        TitleComponent,
        TitleDetailsComponent
    ],
    imports: [
        CommonModule,
        TitleRoutes
    ],
    providers: [
        TitleService
    ],
    exports: [
        TitleComponent
    ]
  })
  
  export class TitleModule { }