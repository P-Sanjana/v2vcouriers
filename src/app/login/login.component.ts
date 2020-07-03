import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../shared/user';
import {Login} from '../login';
import {routes} from '../app-routing/routes';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('fform') LoginFormDirective;
  LoginForm:FormGroup;
  message: string;
  returnUrl: string;
  model: Login = { email: "xyz@abc.com", password: "Sanj333#" };
  formErrors = {
    'email': '',
    'password':''
  };
  validationMessages={
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'password':{
      'required':       'Password is required',
      'minlength':     'Password must be at least 8 characters long.',
      'pattern':        'Password must contain at least one uppercase, one lowercase, and one number'
    }
  };
  constructor(private fb: FormBuilder,private router: Router, public authService: AuthService) { 
    this.createForm();
  }
  get f() { return this.LoginForm.controls; }
  createForm(){
    this.LoginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password:['',[Validators.required, Validators.minLength(8),Validators.pattern]],
    });
    this.authService.logout();
    this.LoginForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  login() {

    // stop here if form is invalid
    if (this.LoginForm.invalid) {
        return;
    }
    else{
      if(this.f.userid.value == this.model.email && this.f.password.value == this.model.password){
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      }
      else{
        this.message = "Please check your email and password";
      }
    }    
}
  onValueChanged(data?: any) {
    if (!this.LoginForm) { return; }
    const form = this.LoginForm;
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
    this.LoginForm.reset({
      email: '',
      password:'',
    });
    this.LoginFormDirective.resetForm();
  }
  ngOnInit() {
    
  }
  
}
