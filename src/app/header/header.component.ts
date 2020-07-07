import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { couriers } from '../shared/couriers';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { Role } from '../_models/role';
import { User } from '../_models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image:string;
  private roles: string[];
  private authority: string;
  constructor( private router: Router, @Inject('BASE_URL') private baseURL:"http://localhost:3000/",private http: HttpClient,
  private tokenStorage: TokenStorageService) {
     
     }

  ngOnInit(){
    tokenStotage: this.tokenStorage.getToken();
    this.image=this.baseURL+"images/courier3.jpg";
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'ROLE_USER';
        return true;
      });
    }
  }
 
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
