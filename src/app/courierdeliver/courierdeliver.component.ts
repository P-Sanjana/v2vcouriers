import { Component, OnInit, Inject } from '@angular/core';
import {CourierdataService} from '../services/courierdata.service';
import { HttpClient } from '@angular/common/http';
import {Courier} from '../shared/courier';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-courierdeliver',
  templateUrl: './courierdeliver.component.html',
  styleUrls: ['./courierdeliver.component.scss']
})
export class CourierdeliverComponent implements OnInit {
  couriers:any;
  courierupdate:any;
  clicked=false;
  index:number=0;
  constructor(private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/",
  private router: Router,private token: TokenStorageService) { }

  ngOnInit() {
    this.courierdata.getCourierrdelivery().subscribe(couriers=>this.couriers=couriers,error => console.log(error));
    token: this.token.getToken();
  }
  accepted(id:number,i:number){
    this.clicked=true;
    this.index=i;
 this.courierdata.changeStatusinp(id).subscribe(courierupdate=>this.courierupdate=courierupdate,error => console.log(error));
  }
    logout() {
      this.token.signOut();
      window.location.reload();
    
    }
}
