import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'portafolioitem', component: PortafolioComponent, pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
