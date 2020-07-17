import { Component, OnInit,ViewChild } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import {Data} from '../shared/data';
import { Chart } from 'chart.js';
import {AdmindataService} from '../services/admindata.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  constructor(private token: TokenStorageService,private admindata:AdmindataService,private userdata:UserService) { }
  private roles: string[];
  private authority: string;
 data:Data[];
 month=[];
 price=[];
  chart = [];
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
    this.admindata.getGraphData().subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.month,
        datasets: [
          {
            data: this.price,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  });
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
