import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Courier} from '../shared/courier';
import {CourierdataService} from '../services/courierdata.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courieraccept',
  templateUrl: './courieraccept.component.html',
  styleUrls: ['./courieraccept.component.scss']
})
export class CourieracceptComponent implements OnInit {
  couriers:Courier[];
  constructor(private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/",
  private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit() {
    this.courierdata.getAllCouriers().subscribe(couriers=>this.couriers=couriers);
  }
accepted(courier:Courier){
courier.status="Yet to receive";
return this.http.put(this.baseURL+'couriers/'+courier.id,courier).subscribe(courier=>{console.log(courier);});
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/start']);
}
}
