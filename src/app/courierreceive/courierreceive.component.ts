import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../_models/user';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Courier } from '../shared/courier';
import { HttpClient } from '@angular/common/http';
import { CourierdataService } from '../services/courierdata.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-courierreceive',
  templateUrl: './courierreceive.component.html',
  styleUrls: ['./courierreceive.component.scss']
})
export class CourierreceiveComponent implements OnInit {
  courierupdate:any;
  couriers:any;
  clicked=false;
  index:number=0;
  constructor(private userService: UserService,private token: TokenStorageService,
    private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/",private router: Router) {
   
  }

  ngOnInit() {
    token: this.token.getToken();
    this.courierdata.getCouriersReceive().subscribe(couriers=>this.couriers=couriers,error => console.log(error));
  }
  accepted(id:number,i:number){
    this.clicked=true;
    this.index=i;
 this.courierdata.changeStatusytr(id).subscribe(courierupdate=>this.courierupdate=courierupdate,error => console.log(error));
  }
    logout() {
      this.token.signOut();
    window.location.reload();
    }
}
