import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { routes } from './routes';
import {TokenStorageService} from '../auth/token-storage.service';
import {UserService} from '../services/user.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {
  constructor(private token: TokenStorageService,private userdata:UserService) { }
  private roles: string[];
  private authority: string;
  ngOnInit() {
    token: this.token.getToken();
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_COURIERBOY') {
          this.authority = 'courierboy';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
 }
