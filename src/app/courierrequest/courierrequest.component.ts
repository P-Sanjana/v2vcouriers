import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Courier,ContactType,courierservice} from '../shared/courier';
import {couriers} from '../shared/couriers';
import {CouriertypeService} from'../services/couriertype.service';
import {Inject, Injectable} from '@angular/core';
import {CourierserviceService} from '../services/courierservice.service';
import {CourierdataService} from '../services/courierdata.service';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { TokenStorageService } from '../auth/token-storage.service';
import { User } from '../_models/user';
import { Location } from '@angular/common';
@Component({
  selector: 'app-courierrequest',
  templateUrl: './courierrequest.component.html',
  styleUrls: ['./courierrequest.component.scss'],
})
export class CourierrequestComponent implements OnInit {
  currentUser: User;
    userFromApi: User;
    users: User[] = [];
    board: string;
    errorMessage = '';
    info=false;
  @ViewChild('fform') pickupFormDirective: any;
  pickupForm:FormGroup;
  courier: Courier;
  contacttype=ContactType;
  courierservice=courierservice;
  submitted=false;
  courierfromjson: any;
  mail:string;
  p:string;
  addedcourier:any;
  formErrors={
    'sendername':'',
    'email':'',
    'phnumber':'',
    'senderaddress':'',
    'sendercity':'',
    'senderdistrict':'',
    'senderstate':'',
    'sendercountry':'',
    'contacttype':'',
    'repname':'',
    'repphnumber':'',
    'repaddress':'',
    'repcity':'',
    'repdistrict':'',
    'repstate':'',
    'repcountry':'',
    'courierservice':'',
    'pickupdate':'',
    'wt':'',
    'vol':'',
  };
  validationMessages={
    'sendername':{
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'email':{
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'phnumber':{
      'required':      'Phone number is required.',
      'pattern':       'Phone number must contain only numbers.'
    },
    'senderaddress':{
      'required':      'Address is required',
    },
    'sendercity':{
      'required':       'City is required',
    },
    'senderdistrict':{
      'required':       'District is required',
    },
    'senderstate':{
      'required':       'State is required',
    },
    'sendercountry':{
      'required':       'Country is required',
    },
    'repname':{
      'required':      'Recipient Name is required.',
      'minlength':     'Recipient Name must be at least 2 characters long.',
      'maxlength':     'Recipient Name cannot be more than 25 characters long.'
    },
    'repphnumber':{
      'required':      'Phone number is required.',
      'pattern':       'Phone number must contain only numbers.'
    },
    'repaddress':{
      'required':      'Recipient Address is required',
    },
    'repcity':{
      'required':       'Recipient City is required',
    },
    'repdistrict':{
      'required':       'Recipient District is required',
    },
    'repstate':{
      'required':       'Recipient State is required',
    },
    'repcountry':{
      'required':       'Recipient Country is required',
    },
    'courierservice':{
      'required':      'Courier Service is required.'
    },
    'pickupdate':{
      'required':      'PickUp Date is required.'
    },
    'wt':{
      'required':      'Weight is required.'
    },
    'vol':{
      'required':      'Volume is required.'
    },
  }
  constructor(private fb: FormBuilder,private couriertype:CouriertypeService,private token: TokenStorageService, private location: Location,
  private courierserviceservice:CourierserviceService,private courierdata:CourierdataService,private userService: UserService) { 
    this.createForm();
  }
  ngOnInit() {
    token: this.token.getToken();
  }
  
  createForm() {
    this.pickupForm=this.fb.group({
      sendername:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      email:['',[Validators.required,Validators.email]],
      phnumber:['',[Validators.required,Validators.pattern]],
      senderaddress:['',[Validators.required]],
      sendercity:['',[Validators.required]],
      senderdistrict:['',[Validators.required]],
      senderstate:['',[Validators.required]],
      sendercountry:['',[Validators.required]],
      repname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      repphnumber:['',[Validators.required,Validators.pattern]],
      repaddress:['',[Validators.pattern]],
      repcity:['',[Validators.required]],
      repdistrict:['',[Validators.required]],
      repstate:['',[Validators.required]],
      repcountry:['',[Validators.required]],
      courierservice:['',[Validators.required]],
      pickupdate:['',[Validators.required]],
      wt:['',[Validators.required]],
      vol:['',[Validators.required]],
      contacttype:'None',
      agree:false,
    });
    this.pickupForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  
  onSubmit(){
    let p=Math.round(parseInt(this.pickupForm.value.wt)*parseInt(this.pickupForm.value.vol)/5000);
    if(this.pickupForm.value.courierservice=="Standard"){
      p+=500;
    }
    else if(this.pickupForm.value.courierservice=="Overnight"){
      p+=900;
    }
    else if(this.pickupForm.value.courierservice=="SameDay Express"){
      p+=500;
    }
    else if(this.pickupForm.value.courierservice=="International"){
      p+=2000;
    }
    else{
      p+=1000;
    }
    this.courier = new Courier(
      this.pickupForm.value.sendername,
      this.pickupForm.value.email,
      this.pickupForm.value.phnumber,
      this.pickupForm.value.senderaddress,
      this.pickupForm.value.sendercity,
      this.pickupForm.value.senderdistrict,
      this.pickupForm.value.senderstate,
      this.pickupForm.value.sendercountry,
      this.pickupForm.value.agree,
      this.pickupForm.value.contacttype,
      this.pickupForm.value.repname,
      this.pickupForm.value.repphnumber,
      this.pickupForm.value.repaddress,
      this.pickupForm.value.repcity,
      this.pickupForm.value.repdistrict,
      this.pickupForm.value.repstate,
      this.pickupForm.value.repcountry,
      this.pickupForm.value.courierservice,
      this.pickupForm.value.pickupdate,
      "Yet_to_accept",
      this.pickupForm.value.wt,
      this.pickupForm.value.vol,
      String(p)
     );
     console.log(this.courier);
      this.courierdata.create(this.courier).subscribe(data => console.log(data), error => console.log(error));
  this.submitted=true;
  this.pickupForm.reset({
    sendername:'',
    email:'',
    phnumber:'',
    senderaddress:'',
    sendercity:'',
    senderdistrict:'',
    senderstate:'',
    sendercountry:'',
    repname:'',
    repphnumber:'',
    repaddress:'',
    repcity:'',
    repdistrict:'',
    repstate:'',
    repcountry:'',
    courierservice:'',
    pickupdate:'',
    wt:'',
    vol:'',
    contacttype:'None',
    agree:false,
  })
  this.pickupForm.reset();
}
getInfo(){
  this.info=true;
  this.submitted=false;
 this.courierdata.getcourierbymail(this.courier.email).subscribe(courier=>this.addedcourier=courier,error => console.log(error));

}
  onValueChanged(data?: any) {
    if (!this.pickupForm) { return; }
    const form = this.pickupForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  
  goBack(): void {
    this.location.back();
  }
}
