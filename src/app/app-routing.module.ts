import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipComponent } from './components/add-recip/add-recip.component';
import { DetailComponent } from './components/detail/detail.component';
import { RicetteComponent } from './components/ricette/ricette.component';
import { UpDateComponent } from './components/up-date/up-date.component';

const routes: Routes = [

  {
    path:'addRecip',
    component: AddRecipComponent
  },
  {
    path:'dettagli/:id',
    component: DetailComponent
  },
  {
    path:'',
    component: RicetteComponent
  },
  {
    path:'upDate/:id',
    component: UpDateComponent
  },
  {
    path:'**',
    redirectTo: ''
  }, 
  {
    path:'**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
