import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../_models/user';
import { Courier } from '../shared/courier';
import { HttpClient } from '@angular/common/http';
import { CourierdataService } from '../services/courierdata.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courierboydelivery',
  templateUrl: './courierboydelivery.component.html',
  styleUrls: ['./courierboydelivery.component.scss']
})
export class CourierboydeliveryComponent implements OnInit {
  currentUser: User;
  userFromApi: User;
  users: User[] = [];
  couriers:Courier[];
  constructor(private userService: UserService,
    private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/",private router: Router) {
     }

  ngOnInit() {
  this.courierdata.getCourierdelivery().subscribe(couriers=>this.couriers=couriers);
  }
  accepted(courier:Courier){
    courier.status="Delivered";
    return this.http.put(this.baseURL+'couriers/'+courier.id,courier).subscribe(courier=>{console.log(courier);});
    }
    logout() {
      
    }
}
