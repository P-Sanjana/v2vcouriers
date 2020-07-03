import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CourierrequestComponent } from '../courierrequest/courierrequest.component';
import {TrackComponent} from '../track/track.component';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import { StartComponent } from '../start/start.component';
export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    { path: 'home',  component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contactus',     component: ContactComponent },
    { path: 'about', component:AboutComponent},
    {path:'courierrequest',component:CourierrequestComponent},
    {path:'track',component:TrackComponent},
    {path:'start',component:StartComponent},
  ];