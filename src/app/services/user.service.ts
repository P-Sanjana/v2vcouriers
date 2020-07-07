import { Injectable ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/test/user';
  private cboyUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  constructor(private http: HttpClient) { }


}
