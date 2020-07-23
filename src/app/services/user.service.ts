import { Injectable ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  sharedData:string[];
  private userUrl = 'https://localhost:8443/api/test/user';
  private cboyUrl = 'https://localhost:8443/api/test/courier';
  private adminUrl = 'https://localhost:8443/api/test/admin';
  private userpUrl='https://localhost:8443/v2vcouriers/myaccount';
  constructor(private http: HttpClient) { }
  setSharedData(authorities:string[]){
    this.sharedData=authorities;
    console.log(this.sharedData);
  }
  getSharedData():string[]{
    return this.sharedData;
  }
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getCBoyBoard(): Observable<string> {
    return this.http.get(this.cboyUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getUserDetails():Observable<any>{
    return this.http.get(this.userpUrl);
  }
}
