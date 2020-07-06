import { Injectable, Inject } from '@angular/core';
import {Courier} from '../shared/courier';
import {couriers} from '../shared/couriers';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourierserviceService {
   courier:Courier;
  
  addToList(pickupForm:FormGroup):Observable<Courier>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    if(pickupForm.valid){
      let p=Math.round(parseInt(pickupForm.value.wt)*parseInt(pickupForm.value.vol)/5000);
    if(pickupForm.value.courierservice=="Standard"){
      p+=3500;
    }
    else if(pickupForm.value.courierservice=="Overnight"){
      p+=3000;
    }
    else if(pickupForm.value.courierservice=="SameDay Express"){
      p+=3000;
    }
    else if(pickupForm.value.courierservice=="International"){
      p+=4000;
    }
    else{
      p+=1000;
    }
      this.courier.id=Math.floor(Math.random() * (100 - 1 + 1));
      this.courier.Sendername=pickupForm.value.Sendername;
      this.courier.mail=pickupForm.value.mail;
      this.courier.phNumber=pickupForm.value.phNumber;
      this.courier.Senderaddress=pickupForm.value.Senderaddress;
      this.courier.Sendercity=pickupForm.value.Sendercity;
      this.courier.Senderstate=pickupForm.value.Senderstate;
      this.courier.agree=pickupForm.value.agree;
      this.courier.contacttype=pickupForm.value.contacttype;
      this.courier.repname=pickupForm.value.repname;
      this.courier.repphNumber=pickupForm.value.repphNumber;
      this.courier.repaddress=pickupForm.value.repaddress;
      this.courier.repcity=pickupForm.value.repcity;
      this.courier.repstate=pickupForm.value.repstate;
      this.courier.courierservice=pickupForm.value.courierservice;
      this.courier.pickupdate=pickupForm.value.pickupdate;
      this.courier.status="Yet to accept";
      this.courier.wt=pickupForm.value.wt;
      this.courier.vol=pickupForm.value.vol;
      this.courier.price=String(p);
      return this.http.post<Courier>(this.baseURL+'couriers/', this.courier,httpOptions)
      .pipe(
        catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  }
  getaddedcourier():Courier{
    return this.courier;
  }
  constructor(private http: HttpClient ,@Inject('BASE_URL') private baseURL:"http://localhost:3000/") {
    this.courier=new Courier();
   }
}