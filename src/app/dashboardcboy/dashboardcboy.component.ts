import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-dashboardcboy',
  templateUrl: './dashboardcboy.component.html',
  styleUrls: ['./dashboardcboy.component.scss']
})
export class DashboardcboyComponent implements OnInit {
  constructor(private token: TokenStorageService) {
   }

  ngOnInit() {
    token: this.token.getToken();
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
