import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeLayoutComponent } from './theme-layout/theme-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ThemeLayoutComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
