import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../shared/user';
import {UserserviceService} from '../services/userservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('fform') RegisterFormDirective;
  RegisterForm:FormGroup;
  registered=false;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'password':'',
  };
  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
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
  constructor(private fb: FormBuilder,private userservice:UserserviceService) {
    this.createForm();
   }
   createForm() {
    this.RegisterForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
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
    this.registered=true;
    this.userservice.newUser(this.RegisterForm).subscribe(res=>{
      console.log(res);
    });
    this.RegisterForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.RegisterFormDirective.resetForm();
  }
  ngOnInit() {
  }

}
