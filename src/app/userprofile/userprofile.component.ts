import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
User:any[];
  constructor(private userdata:UserService) { }

  ngOnInit() {
    this.userdata.getUserDetails().subscribe(user=>this.User=user,error => console.log(error));
  }

}
