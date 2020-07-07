import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CourierrequestComponent } from '../courierrequest/courierrequest.component';
import {TrackComponent} from '../track/track.component';
import { LoginComponent } from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import { StartComponent } from '../start/start.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Role } from '../_models/role';
import { AdminprofileComponent } from '../adminprofile/adminprofile.component';
import { CourieracceptComponent } from '../courieraccept/courieraccept.component';
import { CourierdeliverComponent } from '../courierdeliver/courierdeliver.component';
import { CourierreceiveComponent } from '../courierreceive/courierreceive.component';
import { DashboardcboyComponent } from '../dashboardcboy/dashboardcboy.component';
import { CourierboydeliveryComponent } from '../courierboydelivery/courierboydelivery.component';
export const routes: Routes = [
    {path:'auth/login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    { path: 'home',  component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contactus',     component: ContactComponent },
    { path: 'about', component:AboutComponent},
    {path:'courierrequest',component:CourierrequestComponent},
    {path:'track',component:TrackComponent},
    {path:'start',component:StartComponent},
    {path:'dashboard',component:DashboardComponent },
    {path:'adminprofile',component:AdminprofileComponent},
    {path:'courieraccept',component:CourieracceptComponent},
    {path:'courierdeliver',component:CourierdeliverComponent},
    {path:'courierreceive',component:CourierreceiveComponent},
    {path:'dashboardcboy',component:DashboardcboyComponent},
    {path:'courierboydelivery',component:CourierboydeliveryComponent},
  ];