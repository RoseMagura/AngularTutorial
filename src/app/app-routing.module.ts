import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
    { path: 'heroes', component: HelloWorldComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
