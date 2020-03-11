import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorsListComponent } from './pages/directors-list/directors-list.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: DirectorsListComponent, pathMatch: 'full' },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorsRoutingModule { }
