import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CourierdataService} from '../services/courierdata.service';
import {Courier} from '../shared/courier';
import { User } from '../_models/user';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  currentUser: User;
  userFromApi: User;
    users: User[] = [];
  @ViewChild('fform') idFormDirective: any;
  image:string;
  idForm:FormGroup;
  submitted=false;
  courier:any=null;
  trackvalues: Object[];
  status:string;
  currstatus:number;
  tracks: string[]=["Yet_to_accept","Yet_to_receive","In_progress","Ready_to_deliver","Delivered"];
  tracknum:number[]=[1,2,3,4,5];
  constructor(private http: HttpClient,private fb: FormBuilder,
  private courierdata:CourierdataService,private userService: UserService) {
    this.createForm();
   }
  ngOnInit() {
    this.image='/assets/images/tracker.jpg';
  }
  formErrors={
    'id':'',
  };
  ValidationMessages={
    'id':{
      'required':'Email is required.',
      
    }
  };
  createForm(){
    this.idForm=this.fb.group({
      id:['',[Validators.required]], 
    });
    this.idForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
      this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.idForm) { return; }
    const form = this.idForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.ValidationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  getdata(){
    this.submitted=true;
   this.courierdata.getcourierbyid(this.idForm.value.id).subscribe(courier=>this.courier=courier,error => console.log(error));
    /*if(this.courier.status=="Yet_to_accept")
    this.currstatus=1;
    else if(this.courier.status=="Yet_to_receive")
    this.currstatus=2;
    else if(this.courier.status=="In_progress")
    this.currstatus=3;
    else if(this.courier.status=="Ready_to_deliver")
    this.currstatus=4;
    else
    this.currstatus=5;*/
    console.log(this.courier);
  }
}
