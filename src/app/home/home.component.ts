import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
clicked=false;
clicked1=false;
clicked2=false;
clicked3=false;
clicked4=false;
clicked5=false;
  constructor() { 
   
  }

  ngOnInit() {
   
  }
  onClicked(){
this.clicked=true;
  }
onClicked1(){
  this.clicked1=true;
      }
onClicked2(){
  this.clicked2=true;
          }
onClicked3(){
  this.clicked3=true;
              }
onClicked4(){
  this.clicked4=true;
                  }
onClicked5(){
  this.clicked5=true;
                      }
}
