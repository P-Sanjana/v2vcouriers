import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardcboy',
  templateUrl: './dashboardcboy.component.html',
  styleUrls: ['./dashboardcboy.component.scss']
})
export class DashboardcboyComponent implements OnInit {
  currentUser: User;
  userFromApi: User;
  users: User[] = [];
  constructor(private authenticationService: AuthenticationService,private userService: UserService,
    private router: Router) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

  ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => { 
      this.userFromApi = user;
  });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/start']);
  }
}
