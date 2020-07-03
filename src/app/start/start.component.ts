import { Component, OnInit ,ViewChild} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  
  
  constructor() {
    
   }
   
  ngOnInit() {
  }
 cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login"; 
  let form_login= <HTMLElement>document.querySelector('.cont_form_login');
  form_login.style.display = "block";
  let form_sign_up=<HTMLElement>document.querySelector('.cont_form_sign_up');
  form_sign_up.style.opacity = "0";               
  
  setTimeout(function(){  form_login.style.opacity = "1"; },400);  
    
  setTimeout(function(){    
  form_sign_up.style.display = "none";
  },200);  
    }
   cambiar_sign_up(at) {
     let form_sign_up=<HTMLElement>document.querySelector('.cont_form_sign_up');
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    form_sign_up.style.display = "block";
    let form_login=<HTMLElement>document.querySelector('.cont_form_login');
  form_login.style.opacity = "0";
    
  setTimeout(function(){  form_sign_up.style.opacity = "1";
  },100);  
  
  setTimeout(function(){   form_login.style.display = "none";
  },400);  
  
  
  }    
  
  
   ocultar_login_sign_up() {
    let form_sign_up=<HTMLElement>document.querySelector('.cont_form_sign_up');
  document.querySelector('.cont_forms').className = "cont_forms";  
  form_sign_up.style.opacity = "0";  
  let form_login=<HTMLElement>document.querySelector('.cont_form_login');             
  form_login.style.opacity = "0"; 
  
  setTimeout(function(){
    let form_sign_up=<HTMLElement>document.querySelector('.cont_form_sign_up');
    let form_login=<HTMLElement>document.querySelector('.cont_form_login');
  form_sign_up.style.display = "none";
  form_login.style.display = "none";
  },500);  
    
    }
}
