import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { couriers } from '../shared/couriers';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { Role } from '../_models/role';
import { User } from '../_models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image:string;
  currentUser: User;
  constructor( private router: Router,
    private authenticationService: AuthenticationService, @Inject('BASE_URL') private baseURL:"http://localhost:3000/",private http: HttpClient) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit(){
    this.image=this.baseURL+"images/courier3.jpg";
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
}
get isUser(){
  return this.currentUser && this.currentUser.role==Role.User;
}
get isCourierBoy(){
  return this.currentUser && this.currentUser.role==Role.CourierBoy;
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/start']);
}
}
