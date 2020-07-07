import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('fform') LoginFormDirective: { resetForm: () => void; };
  LoginForm:FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  formErrors = {
    'username': '',
    'password':''
  };
  validationMessages={
    'username': {
      'required':      'Email is required.'
    },
    'password':{
      'required':       'Password is required',
      'minlength':     'Password must be at least 8 characters long.',
      'pattern':        'Password must contain at least one uppercase, one lowercase, and one number'
    }
  };
  constructor(private fb: FormBuilder,private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
   @Inject('BASE_URL') private baseURL:"http://localhost:3000/", private tokenStorage: TokenStorageService) { 
    this.createForm();
  }
  createForm(){
    this.LoginForm=this.fb.group({
      username: ['', [Validators.required] ],
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
  onSubmit() {
    console.log(this.LoginForm.value);

    this.loginInfo = new AuthLoginInfo(
      this.LoginForm.value.username,
      this.LoginForm.value.password);
      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          this.reloadPage();
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
    this.LoginForm.reset({
      email: '',
      password:'',
    });
    this.LoginFormDirective.resetForm();
  }
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
  reloadPage() {
    window.location.reload();
  }
}
