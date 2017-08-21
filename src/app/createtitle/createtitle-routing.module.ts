import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTitleComponent } from './createtitle.component';

const routes: Routes = [
  { path: 'createtitle', component: CreateTitleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateTitleRoutingModule { }
