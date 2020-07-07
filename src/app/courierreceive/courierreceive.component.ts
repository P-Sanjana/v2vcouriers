import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../_models/user';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Courier } from '../shared/courier';
import { HttpClient } from '@angular/common/http';
import { CourierdataService } from '../services/courierdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courierreceive',
  templateUrl: './courierreceive.component.html',
  styleUrls: ['./courierreceive.component.scss']
})
export class CourierreceiveComponent implements OnInit {
  currentUser: User;
  userFromApi: User;
  users: User[] = [];
  couriers:Courier[];
  constructor(private userService: UserService,
    private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/",private router: Router) {
   
  }

  ngOnInit() {
  
  this.courierdata.getCourierreceive().subscribe(couriers=>this.couriers=couriers);
  }
  accepted(courier:Courier){
    courier.status="In Progress";
    return this.http.put(this.baseURL+'couriers/'+courier.id,courier).subscribe(courier=>{console.log(courier);});
    }
    logout() {
     
    }
}
