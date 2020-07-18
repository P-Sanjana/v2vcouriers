import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image:string;
  private roles: string[];
  private authority: string;
  constructor( private router: Router,private http: HttpClient,private userdata:UserService,
  private tokenStorage: TokenStorageService) {
     
     }

  ngOnInit(){
    tokenStotage: this.tokenStorage.getToken();
    if (this.tokenStorage.getToken()) {
      
      this.roles = this.tokenStorage.getAuthorities();
      console.log(this.roles);
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_COURIERBOY') {
          this.authority = 'cboy';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    this.image='/assets/images/courier3.jpg';
  }
 
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
