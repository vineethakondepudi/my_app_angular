import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeComponent } from './employe/employe.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { RoutingComponent } from './routing/routing.component';
import { Routing1Component } from './routing1/routing1.component';
import { StandardsComponent } from './standards/standards.component';

const routes: Routes = [

 { path:"employe",component:EmployeComponent,
  children:
  [
    {
      path:"dashboard",component:DashboardComponent
    },
    {
      path:"referrals",component:ReferralsComponent
    }
  ]
},
{
  path:"standards",component:StandardsComponent
}

// {path:'routing',component:RoutingComponent},
// {path:'routing1',component:Routing1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

