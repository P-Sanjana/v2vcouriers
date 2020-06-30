import { Injectable ,Inject} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class CouriertypeService {
   getcouriertype():Observable<string[]> {
    return this.http.get<string[]>(this.baseURL+'couriertype').pipe(
      catchError((r: HttpErrorResponse) => throwError(r.error || 'Server error')));
   }
  constructor(private http: HttpClient ,@Inject('BASE_URL') private baseURL:"http://localhost:3000/") { }
}
