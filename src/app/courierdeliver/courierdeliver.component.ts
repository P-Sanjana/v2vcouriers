import { Component, OnInit, Inject } from '@angular/core';
import {CourierdataService} from '../services/courierdata.service';
import { HttpClient } from '@angular/common/http';
import {Courier} from '../shared/courier';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-courierdeliver',
  templateUrl: './courierdeliver.component.html',
  styleUrls: ['./courierdeliver.component.scss']
})
export class CourierdeliverComponent implements OnInit {
  couriers:Courier[];
  constructor(private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/",
  private router: Router,private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.courierdata.getCouriersStatus().subscribe(couriers=>this.couriers=couriers);
  }
  accepted(courier:Courier){
    courier.status="Ready to Deliver";
    return this.http.put(this.baseURL+'couriers/'+courier.id,courier).subscribe(courier=>{console.log(courier);});
    }
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/start']);
    }
}
