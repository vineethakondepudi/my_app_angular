import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiracaltopbarComponent } from './miracaltopbar/miracaltopbar.component';
import { MirclenavbarComponent } from './mirclenavbar/mirclenavbar.component';
import { ContentComponent } from './content/content.component';
import { EmployeComponent } from './employe/employe.component';
import { StandardsComponent } from './standards/standards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { RoutingComponent } from './routing/routing.component';
import { Routing1Component } from './routing1/routing1.component';







@NgModule({
  declarations: [
    AppComponent,
    MiracaltopbarComponent,
    MirclenavbarComponent,
    ContentComponent,
    EmployeComponent,
    StandardsComponent,
    DashboardComponent,
    ReferralsComponent,
    RoutingComponent,
    Routing1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
