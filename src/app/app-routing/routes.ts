import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CourierrequestComponent } from '../courierrequest/courierrequest.component';
import {TrackComponent} from '../track/track.component';
import { LoginComponent } from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import { StartComponent } from '../start/start.component';
import { AuthGuard } from '../_guards/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Role } from '../_models/role';
import { AdminprofileComponent } from '../adminprofile/adminprofile.component';
import { CourieracceptComponent } from '../courieraccept/courieraccept.component';
export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    { path: 'home',  component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contactus',     component: ContactComponent },
    { path: 'about', component:AboutComponent},
    {path:'courierrequest',component:CourierrequestComponent,canActivate: [AuthGuard],data:{roles:[Role.User]}},
    {path:'track',component:TrackComponent,canActivate: [AuthGuard],data:{roles:[Role.User]}},
    {path:'start',component:StartComponent},
    {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard],data: { roles: [Role.Admin] } },
    {path:'adminprofile',component:AdminprofileComponent},
    {path:'courieraccept',component:CourieracceptComponent},
  ];