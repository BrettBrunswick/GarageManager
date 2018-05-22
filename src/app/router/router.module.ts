import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth.guard';
import { LoginFormComponent } from '../login-form/login-form.component'
import { AboutComponent } from '../about/about.component'
import { ReportComponent } from '../report/report.component'
import { GarageReportComponent } from '../garage-report/garage-report.component'
import { GarageFloorReportComponent} from '../garage-floor-report/garage-floor-report.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard]},
  { path: 'garagereport/:id', component: GarageReportComponent, canActivate: [AuthGuard]},
  { path: 'garagereport/:id/:id', component: GarageFloorReportComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginFormComponent},
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
