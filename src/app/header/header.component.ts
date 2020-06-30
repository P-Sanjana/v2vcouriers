import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { couriers } from '../shared/couriers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image:string;
  constructor(public dialog: MatDialog, @Inject('BASE_URL') private baseURL:"http://localhost:3000/",private http: HttpClient) { }

  ngOnInit(){
    this.image=this.baseURL+"images/courier3.jpg";
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
}
