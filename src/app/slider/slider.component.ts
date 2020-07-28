import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],

})
export class SliderComponent implements OnInit {
  
  mySlideOptions={items: 1, dots: true, nav: true,navSpeed: 700,loop:true,autoplay:true,autoplayTimeout:3000,autoplayHoverPause:true};
  myCarouselOptions={items: 3, dots: true, nav: true};
  constructor() {
   
   }

  ngOnInit() {
  }

}
