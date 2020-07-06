import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../services/user.service';
import { Chart } from 'chart.js';
import {Data} from '../shared/data';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  data: Data[];
  url = 'http://localhost:3000/results';
  month = [];
  price = [];
  chart = [];
  constructor(private userService: UserService,private http:HttpClient,private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users; 
  });
  this.http.get(this.url).subscribe((res: Data[]) => {
    res.forEach(y => {
      this.month.push(y.month);
      this.price.push(y.price);
    });
    this.chart = new Chart('canvas', {
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
    this.authenticationService.logout();
    this.router.navigate(['/start']);
  }
}
