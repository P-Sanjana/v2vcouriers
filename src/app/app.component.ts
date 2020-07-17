import { Component } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import {UserService} from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courier';
  private roles: string[];
  private authority: string;
  
  constructor(private tokenStorage: TokenStorageService,private userdata:UserService) { }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'Admin') {
          this.authority = 'Admin';
          return false;
        } else if (role === 'CourierBoy') {
          this.authority = 'CourierBoy';
          return false;
        }
        this.authority = 'User';
        return true;
      });
    }
  }
}
