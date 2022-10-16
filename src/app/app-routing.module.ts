import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './team/team.component';
import { TaxmanagerComponent } from './taxmanager/taxmanager.component';
import { BillmanagerComponent } from './billmanager/billmanager.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: TaxmanagerComponent },
  { path: 'team', component: TeamComponent },
  { path: 'bills', component: BillmanagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }