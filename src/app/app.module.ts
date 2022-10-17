import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TaxmanagerComponent } from './taxmanager/taxmanager.component';
import { TeamComponent } from './team/team.component';
import { BillmanagerComponent } from './billmanager/billmanager.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TaxmanagerComponent,
    TeamComponent,
    BillmanagerComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: TaxmanagerComponent},
      {path: 'team', component: TeamComponent},
      {path: 'bills', component: BillmanagerComponent},
    ]), 
    HttpClientModule, NgbModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }