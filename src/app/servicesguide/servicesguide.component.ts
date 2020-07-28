import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicesguide',
  templateUrl: './servicesguide.component.html',
  styleUrls: ['./servicesguide.component.scss']
})
export class ServicesguideComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }

}
