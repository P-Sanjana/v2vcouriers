import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../_models/user';
import { Courier } from '../shared/courier';
import { HttpClient } from '@angular/common/http';
import { CourierdataService } from '../services/courierdata.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-courierboydelivery',
  templateUrl: './courierboydelivery.component.html',
  styleUrls: ['./courierboydelivery.component.scss']
})
export class CourierboydeliveryComponent implements OnInit {
  couriers:any;
  courierupdate:any;
  clicked=false;
  index:number=0;
  constructor(private userService: UserService,
    private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/",private router: Router,
    private token: TokenStorageService) {
     }
  ngOnInit() {
    return this.courierdata.getCourierscboyDelivery().subscribe(couriers => this.couriers = couriers);
  token: this.token.getToken();
  }
  accepted(id:number,i:number){
    this.clicked=true;
    this.index=i;
 this.courierdata.changeStatusrtd(id).subscribe(courierupdate=>this.courierupdate=courierupdate,error => console.log(error));
  }
    logout() {
      this.token.signOut();
    window.location.reload();
    }
}
