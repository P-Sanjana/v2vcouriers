import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {
private getgraph="https://localhost:8443/v2vcouriers/pricebymonth";
  constructor(private http: HttpClient) { }
  getGraphData(){
    return this.http.get(this.getgraph);
  }
}
