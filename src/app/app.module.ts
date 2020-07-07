import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthenticationService } from './auth/authentication.service';
import {TokenStorageService} from './auth/token-storage.service';
import { UserService } from './services/user.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {CourierdataService} from './services/courierdata.service';
import {UserserviceService} from './services/userservice.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CourierrequestComponent } from './courierrequest/courierrequest.component';
import { FooterComponent } from './footer/footer.component';
import {CourierserviceService} from './services/courierservice.service';
import {CouriertypeService} from './services/couriertype.service';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { baseURL } from './shared/baseurl';
import { TrackComponent } from './track/track.component';
import 'hammerjs';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CourieracceptComponent } from './courieraccept/courieraccept.component';
import { CourierdeliverComponent } from './courierdeliver/courierdeliver.component';
import { CourierreceiveComponent } from './courierreceive/courierreceive.component';
import { DashboardcboyComponent } from './dashboardcboy/dashboardcboy.component';
import { CourierboydeliveryComponent } from './courierboydelivery/courierboydelivery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CourierrequestComponent,
    FooterComponent,
    TrackComponent,
    RegisterComponent,
    StartComponent,
    AlertComponent,
    DashboardComponent,
    AdminprofileComponent,
    CourieracceptComponent,
    CourierdeliverComponent,
    CourierreceiveComponent,
    DashboardcboyComponent,
    CourierboydeliveryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule
  ],
  entryComponents: [
    LoginComponent
],
  providers: [CouriertypeService,CourierserviceService,{provide: 'BASE_URL', useValue: 'http://localhost:3000/'},
  UserserviceService,CourierdataService,httpInterceptorProviders,AuthenticationService,TokenStorageService,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }