import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Courier} from '../shared/courier';
import {CourierdataService} from '../services/courierdata.service';
@Component({
  selector: 'app-courieraccept',
  templateUrl: './courieraccept.component.html',
  styleUrls: ['./courieraccept.component.scss']
})
export class CourieracceptComponent implements OnInit {
  couriers:Courier[];
  constructor(private http:HttpClient,private courierdata:CourierdataService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/") { }

  ngOnInit() {
    this.courierdata.getAllCouriers().subscribe(couriers=>this.couriers=couriers);
  }
accepted(courier:Courier){
courier.status="In Progress";
return this.http.put(this.baseURL+'couriers/'+courier.id,courier).subscribe(courier=>{console.log(courier);});
}
}
