import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title.component';
import { TitleDetailsComponent } from './title-details/title-details.component'

const titleroutes: Routes = [
        { path: 'title', component: TitleComponent },
        { path: 'title/:id', component: TitleDetailsComponent }
];

@NgModule ({
    imports:[ RouterModule.forChild(titleroutes) ],
    exports:[ RouterModule ]
})


export class TitleRoutes {}