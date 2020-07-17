import { Injectable, Inject } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { d } from '@angular/core/src/render3';
import {Courier} from '../shared/courier';
import { couriers } from '../shared/couriers';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Params } from '@angular/router';
import { Headers, Http } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class CourierdataService {
  constructor(@Inject('BASE_URL') private baseURL:"http://localhost:3000/",private http: HttpClient) { }
  private couriersUrl = 'https://localhost:8443/v2vcouriers/newcourier'; 
  private getmailurl='https://localhost:8443/v2vcouriers/courierbyemail?email=';
  private getidurl='https://localhost:8443/v2vcouriers/courierbyid/';
  private getyettoaccept='https://localhost:8443/v2vcouriers/couriersbyytastatus';
  private updateyta='https://localhost:8443/v2vcouriers/updateytastatus/';
  private getyettoreceive='https://localhost:8443/v2vcouriers/couriersbyytrstatus';
  private updateytr="https://localhost:8443/v2vcouriers/updateytrstatus/";
  private getinprogress='https://localhost:8443/v2vcouriers/couriersbyinstatus';
  private updateinp='https://localhost:8443/v2vcouriers/updateinstatus/';
  private getreadytd='https://localhost:8443/v2vcouriers/couriersbyrtdstatus';
  private updatertd='https://localhost:8443/v2vcouriers/updatertdstatus/';
  private getall='https://localhost:8443/v2vcouriers/couriers';
  private getvehiclesender='https://localhost:8443/v2vcouriers/sendervehicleidbycourierid/';
  private getvehiclerep="https://localhost:8443/v2vcouriers/repvehicleidbycourierid/";
  getAllCouriers():Observable<any>{
    return this.http.get<any>(this.getall);
  }
  getcourierbyid(id:number){
   return this.http.get(this.getidurl+id);
  }
  getcourierbymail(mail:string){
    return this.http.get(this.getmailurl+mail);
  
  }
  create(courier: Courier): Observable<Object> {

    return this.http.post(this.couriersUrl,courier,httpOptions);
  }
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getCouriersAccept(){
    
    return this.http.get(this.getyettoaccept);
  }
  changeStatusyta(id:number){
    return this.http.get(this.updateyta+id);
  }
  getCouriersReceive(){
    return this.http.get(this.getyettoreceive);
  }
  changeStatusytr(id:number){
    return this.http.get(this.updateytr+id);
  }
  getCourierrdelivery(){
    return this.http.get(this.getinprogress);
  }
  changeStatusinp(id:number){
    return this.http.get(this.updateinp+id);
  }
  getCourierscboyDelivery(){
    return this.http.get(this.getreadytd);
  }
  changeStatusrtd(id:number){
    return this.http.get(this.updatertd+id);
  }
  getVehicleSender(id:number){
    return this.http.get(this.getvehiclesender+id);
  }
  getVehicleRep(id:number){
    return this.http.get(this.getvehiclerep+id);
  }
}
