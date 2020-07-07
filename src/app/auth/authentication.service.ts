import { Injectable,Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
 
  constructor(private http: HttpClient) {
   }
   attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
