import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import {AuthenticationService} from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('fform') LoginFormDirective: { resetForm: () => void; };
  LoginForm:FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
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
  constructor(private fb: FormBuilder,private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,@Inject('BASE_URL') private baseURL:"http://localhost:3000/") { 
    this.createForm();
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }
  createForm(){
    this.LoginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password:['',[Validators.required, Validators.minLength(8),Validators.pattern]],
    });
    this.LoginForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
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
  get f() { return this.LoginForm.controls; }
  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.LoginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.LoginForm.value.email, this.LoginForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                  this.error = error;
                    this.loading = false;
                });
    this.LoginForm.reset({
      email: '',
      password:'',
    });
    this.LoginFormDirective.resetForm();
  }
 
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
