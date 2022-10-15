import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TaxmanagerComponent } from './taxmanager/taxmanager.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TaxmanagerComponent,
    TeamComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: TaxmanagerComponent},
      {path: 'team', component: TeamComponent}
    ]),  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
