import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierdeliverComponent } from './courierdeliver.component';

describe('CourierdeliverComponent', () => {
  let component: CourierdeliverComponent;
  let fixture: ComponentFixture<CourierdeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierdeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierdeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
