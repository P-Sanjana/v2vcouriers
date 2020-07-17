import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserserviceService} from '../services/userservice.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import {UserService } from '../services/user.service';
import { SignUpInfo } from '../auth/signup-info';
import { AuthenticationService } from '../auth/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('fform') RegisterFormDirective: { resetForm: () => void; };
  RegisterForm:FormGroup;
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
submitted=false;
  formErrors = {
    'name': '',
    'username': '',
    'email': '',
    'password':'',
  };
  validationMessages = {
    'name': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'username': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'password':{
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 8 characters long.',
      'pattern':        'Password must contains one uppercase, one lowercase, one number,one special character',
    }
  };
  constructor(private fb: FormBuilder,private authService: AuthenticationService) {
    this.createForm();
   }
   createForm() {
    this.RegisterForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      email: ['', [Validators.required, Validators.email] ],
      password:['',[Validators.required,Validators.pattern,Validators.minLength]],
    });
    this.RegisterForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.RegisterForm) { return; }
    const form = this.RegisterForm;
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
  onSubmit() {
    console.log(this.RegisterForm.value);
this.submitted=true;
    this.signupInfo = new SignUpInfo(
      this.RegisterForm.value.name,
      this.RegisterForm.value.username,
      this.RegisterForm.value.email,
      this.RegisterForm.value.password);
      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );
    this.RegisterForm.reset({
      firstname: '',
      lastname: '',
      email: '',
      password:''
    });
    this.RegisterFormDirective.resetForm();
  }
  ngOnInit() {
  }

}
