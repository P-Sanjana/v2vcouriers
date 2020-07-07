import { Injectable,Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { d } from '@angular/core/src/render3';
import {User} from '../shared/user';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  user:User;
  constructor(private http: HttpClient ,@Inject('BASE_URL') private baseURL:"http://localhost:3000/") {
    this.user=new User();
   }
  getuserdata():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/users').pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  getuserbymail(mail:string):Observable<User>{
    return this.http.get<User>(this.baseURL+'users?mail='+mail).pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
  }
  newUser(RegisterForm:FormGroup):Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    if(RegisterForm.valid){
      this.user.id=Math.floor(Math.random() * (100 - 1 + 1));
      this.user.firstname=RegisterForm.value.firstname;
      this.user.lastname=RegisterForm.value.lastname;
      this.user.email=RegisterForm.value.email;
      this.user.password=RegisterForm.value.password;
      return this.http.post<User>(this.baseURL+'users/', this.user,httpOptions)
      .pipe(
        catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
    }
  }
}
