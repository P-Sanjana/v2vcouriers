import { Component, OnInit ,Input,Inject,ViewChild} from '@angular/core';
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
  courier:Courier;
  trackvalues: Object[];
  status:string;
  tracks: string[];
  done="done";
  constructor(@Inject('BASE_URL') private baseURL:"http://localhost:3000/",private http: HttpClient,private fb: FormBuilder,
  private courierdata:CourierdataService,private userService: UserService) {
    this.createForm();
    this.courier=new Courier();
   }
  ngOnInit() {
    this.image=this.baseURL+"images/tracker.jpg";
    this.courierdata.gettracks().subscribe(tracks=>this.tracks=tracks);
    this.courierdata.gettrackvalues().subscribe(trackvalues=>this.trackvalues=trackvalues);
  }
  formErrors={
    'consignment':'',
  };
  ValidationMessages={
    'consignment':{
      'required':'Consignment Number is required.',
      'pattern':'Enter a valid Consignment Number.'
    }
  };
  createForm(){
    this.idForm=this.fb.group({
      consignment:['',[Validators.required,Validators.pattern]], 
    });
    this.idForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
      this.onValueChanged();
  }

private loadAllUsers() {
   
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
    this.courierdata.getcourierbyid(this.idForm.value.consignment).subscribe(courier=>this.courier=courier);
  }
}
