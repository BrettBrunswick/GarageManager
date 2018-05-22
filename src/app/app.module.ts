import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './router/router.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutComponent } from './about/about.component';
import { ReportComponent } from './report/report.component';
import { ServiceService } from './services/service.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { GarageReportComponent } from './garage-report/garage-report.component';
import { GarageFloorReportComponent } from './garage-floor-report/garage-floor-report.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginFormComponent,
    AboutComponent,
    ReportComponent,
    GarageReportComponent,
    GarageFloorReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [AuthGuard, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
