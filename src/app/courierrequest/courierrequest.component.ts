import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Courier,ContactType} from '../shared/courier';
import {couriers} from '../shared/couriers';
import {CouriertypeService} from'../services/couriertype.service';
import {Inject, Injectable} from '@angular/core';
import {CourierserviceService} from '../services/courierservice.service';
import {CourierdataService} from '../services/courierdata.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-courierrequest',
  templateUrl: './courierrequest.component.html',
  styleUrls: ['./courierrequest.component.scss'],
})
export class CourierrequestComponent implements OnInit {
  @ViewChild('fform') pickupFormDirective;
  pickupForm:FormGroup;
  courier:Courier;
  contacttype=ContactType;
  courierservice;
  submitted=false;
  courierfromjson;
  mail:string;
  p:string;
  addedcourier:Courier;
  formErrors={
    'Sendername':'',
    'mail':'',
    'phNumber':'',
    'Senderaddress':'',
    'Sendercity':'',
    'Senderstate':'',
    'contacttype':'',
    'repname':'',
    'repphNumber':'',
    'repaddress':'',
    'repcity':'',
    'repstate':'',
    'courierservice':'',
    'pickupdate':'',
    'wt':'',
    'vol':'',
  };
  validationMessages={
    'Sendername':{
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'mail':{
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'phNumber':{
      'required':      'Phone number is required.',
      'pattern':       'Phone number must contain only numbers.'
    },
    'Senderaddress':{
      'required':      'Address is required',
    },
    'Sendercity':{
      'required':       'City is required',
    },
    'Senderstate':{
      'required':       'State is required',
    },
    'repname':{
      'required':      'Recipient Name is required.',
      'minlength':     'Recipient Name must be at least 2 characters long.',
      'maxlength':     'Recipient Name cannot be more than 25 characters long.'
    },
    'repphNumber':{
      'required':      'Phone number is required.',
      'pattern':       'Phone number must contain only numbers.'
    },
    'repaddress':{
      'required':      'Recipient Address is required',
    },
    'repcity':{
      'required':       'Recipient City is required',
    },
    'repstate':{
      'required':       'Recipient State is required',
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
  constructor(private fb: FormBuilder,private couriertype:CouriertypeService,
  private courierserviceservice:CourierserviceService,private courierdata:CourierdataService) { 
    this.createForm();
    this.courier=new Courier();
  }
  ngOnInit() {
    
    this.courierservice=this.couriertype.getcouriertype();
  }
  createForm() {
    this.pickupForm=this.fb.group({
      Sendername:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      mail:['',[Validators.required,Validators.email]],
      Senderaddress:['',[Validators.required]],
      Sendercity:['',[Validators.required]],
      Senderstate:['',[Validators.required]],
      phNumber:['',[Validators.required,Validators.pattern]],
      repname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      repphNumber:['',[Validators.required,Validators.pattern]],
      repaddress:['',[Validators.pattern]],
      repcity:['',[Validators.required]],
      repstate:['',[Validators.required]],
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
  
  this.submitted=true;
  
  this.courierserviceservice.addToList(this.pickupForm).subscribe(res => {
    console.log(res);
  });
 this.addedcourier=this.courierserviceservice.getaddedcourier();
  
  this.pickupForm.reset({
    Sendername:'',
    mail:'',
    phNumber:'',
    Senderaddress:'',
    Sendercity:'',
    Senderstate:'',
    repname:'',
    repphNumber:'',
    repaddress:'',
    repcity:'',
    repstate:'',
    courierservice:'',
    pickupdate:'',
    wt:'',
    vol:'',
    contacttype:'None',
    agree:false,
  })
  this.pickupForm.reset();
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
}
