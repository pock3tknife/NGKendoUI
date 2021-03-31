import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { GridComponent } from './grid/grid.component';
import { CustomeditingrfComponent } from './grid/customeditingrf/customeditingrf.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'grid',
    component: GridComponent,
    children: [
      { path: 'customeditingrf', component: CustomeditingrfComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
