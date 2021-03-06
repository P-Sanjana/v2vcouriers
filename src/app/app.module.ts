import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {AuthenticationService } from './auth/authentication.service';
import {TokenStorageService} from './auth/token-storage.service';
import { UserService } from './services/user.service';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
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
import {MatExpansionModule} from '@angular/material/expansion';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import {AuthGuard} from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { OwlModule } from 'ngx-owl-carousel';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CourieracceptComponent } from './courieraccept/courieraccept.component';
import { CourierdeliverComponent } from './courierdeliver/courierdeliver.component';
import { CourierreceiveComponent } from './courierreceive/courierreceive.component';
import { DashboardcboyComponent } from './dashboardcboy/dashboardcboy.component';
import { CourierboydeliveryComponent } from './courierboydelivery/courierboydelivery.component';
import { SliderComponent } from './slider/slider.component';
import { TransportComponent } from './transport/transport.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ServicesguideComponent } from './servicesguide/servicesguide.component';

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
    DashboardComponent,
    AdminprofileComponent,
    CourieracceptComponent,
    CourierdeliverComponent,
    CourierreceiveComponent,
    DashboardcboyComponent,
    CourierboydeliveryComponent,
    SliderComponent,
    TransportComponent,
    PaymentComponent,
    UserprofileComponent,
    ServicesguideComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
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
    MatSidenavModule,
    OwlModule,
    NgxPayPalModule,
    MatTabsModule,
    MatExpansionModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  entryComponents: [
    LoginComponent
],
  providers: [CouriertypeService,CourierserviceService,{provide: 'BASE_URL', useValue: 'http://localhost:3000/'},
  UserserviceService,CourierdataService,httpInterceptorProviders,AuthenticationService,TokenStorageService,
  UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }