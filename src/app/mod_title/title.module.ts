import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleRoutingModule } from './title-routing.module';

import { TitleComponent } from './title.component';
import { TitleDetailsComponent } from './smd_title_details/title_details.component';

import { TitlesService } from '../com_services/titles.service';
import { RouteActivatorService } from '../com_services/route_activator.service'

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
        TitlesService,
        RouteActivatorService
    ],
    exports: [
        TitleComponent
    ]
  })
  
  export class TitleModule { }