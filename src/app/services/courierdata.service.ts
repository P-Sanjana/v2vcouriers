import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { d } from '@angular/core/src/render3';
import {Courier} from '../shared/courier';
import { couriers } from '../shared/couriers';
@Injectable({
  providedIn: 'root'
})
export class CourierdataService {
  constructor(private http: HttpClient ,@Inject('BASE_URL') private baseURL:"http://localhost:3000/") { }
  gettrackvalues():Observable<Object[]>{
    return this.http.get<Object[]>(this.baseURL+'trackvalues').pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  gettracks():Observable<string[]>{
    return this.http.get<string[]>(this.baseURL+'tracks').pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  getcourierbyid(id:number):Observable<Courier>{
    return this.http.get<Courier>(this.baseURL+'couriers/'+id).pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  getcourierbymail(mail:string):Observable<Courier>{
    return this.http.get<Courier>(this.baseURL+'couriers?mail='+mail).pipe(map(couriers=>couriers[0])).pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  deletecourierbyid(id:number){
    return this.http.delete(this.baseURL+'couriers/'+id).pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  getAllCouriers():Observable<Courier[]>{
    return this.http.get<Courier[]>(this.baseURL+'couriers?status=Yet to accept').pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  getCouriersStatus():Observable<Courier[]>{
    return this.http.get<Courier[]>(this.baseURL+'couriers?status=In Progress').pipe(
      catchError((r:HttpErrorResponse)=>throwError(r.error || 'Server error')));
  }
  getCourierreceive():Observable<Courier[]>{
    return this.http.get<Courier[]>(this.baseURL+'couriers?status=Yet to receive').pipe(
      catchError((r:HttpErrorResponse)=>throwError(r.error || 'Server error')));
  }
  getCourierdelivery():Observable<Courier[]>{
    return this.http.get<Courier[]>(this.baseURL+'couriers?status=Ready to Deliver').pipe(
      catchError((r:HttpErrorResponse)=>throwError(r.error || 'Server error')));
  }
}
