import { Component, OnInit } from '@angular/core';
import {CourierdataService} from '../services/courierdata.service';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
couriers:any;
vehicle:any;
index:number;
clicked=false;
  constructor(private courierdata:CourierdataService,private token: TokenStorageService) { }

  ngOnInit() {
this.courierdata.getAllCouriers().subscribe(couriers=>this.couriers=couriers,error => console.log(error));
token: this.token.getToken();
  }
getInfo(courier:any,i:number){
  this.clicked=true;
  this.index=i;
  if(courier.status=="Yet_to_receive")
  this.courierdata.getVehicleSender(courier.id).subscribe(vehicle=>this.vehicle=vehicle,error => console.log(error));
  else if(courier.status=="In_progress" || courier.status=="Ready_to_deliver")
  this.courierdata.getVehicleRep(courier.id).subscribe(vehicle=>this.vehicle=vehicle,error => console.log(error));
}
logout() {
  this.token.signOut();
  window.location.reload();
}
}
