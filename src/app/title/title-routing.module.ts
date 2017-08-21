import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title.component';
import { TitleDetailsComponent } from './title-details/title-details.component'


const routes: Routes = [
    { path: 'title', component: TitleComponent },
    { path: 'title/:id', component: TitleDetailsComponent }
    
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})



export class TitleRoutingModule {}