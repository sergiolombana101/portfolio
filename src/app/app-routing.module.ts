import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { ProjectsComponent } from './_layouts/projects/projects.component';
import { HomeRoutingComponent } from './_layouts/home-routing/home-routing.component';
import { HomeLandingComponent } from './_layouts/home-landing/home-landing.component';


const routes: Routes = [
  {
    path: '',
    component: HomeRoutingComponent
  },
  {
    path: 'home',
    component: HomeRoutingComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
