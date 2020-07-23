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
import { AuthGuard } from '../auth/auth.guard';
import { TransportComponent } from '../transport/transport.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
export const routes: Routes = [
    {path:'auth/login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    { path: 'home',  component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contactus',     component: ContactComponent },
    { path: 'about', component:AboutComponent},
    {path:'courierrequest',component:CourierrequestComponent,canActivate: [AuthGuard]},
    {path:'track',component:TrackComponent,canActivate: [AuthGuard]},
    {path:'start',component:StartComponent},
    {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard] },
    {path:'adminprofile',component:AdminprofileComponent,canActivate: [AuthGuard]},
    {path:'courieraccept',component:CourieracceptComponent,canActivate: [AuthGuard]},
    {path:'courierdeliver',component:CourierdeliverComponent,canActivate: [AuthGuard]},
    {path:'courierreceive',component:CourierreceiveComponent,canActivate: [AuthGuard]},
    {path:'dashboardcboy',component:DashboardcboyComponent,canActivate: [AuthGuard]},
    {path:'courierboydelivery',component:CourierboydeliveryComponent,canActivate: [AuthGuard]},
    {path:'transport',component:TransportComponent,canActivate:[AuthGuard]},
    {path:'userprofile',component:UserprofileComponent,canActivate:[AuthGuard]}
  ];
  