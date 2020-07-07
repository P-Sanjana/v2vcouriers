import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    token: this.token.getToken();
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
