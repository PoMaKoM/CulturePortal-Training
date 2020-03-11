import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./main/main.module').then((m) => m.MainModule) },
<<<<<<< HEAD
  {
    path: 'directors', loadChildren: () => import('./directors/directors.module')
      .then((m) => m.DirectorsModule)
  }
=======
  { path: 'worklog', loadChildren: () => import('./worklog/worklog.module').then((m) => m.WorklogModule) }
>>>>>>> worklog
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
