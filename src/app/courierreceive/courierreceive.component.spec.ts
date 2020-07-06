import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierreceiveComponent } from './courierreceive.component';

describe('CourierreceiveComponent', () => {
  let component: CourierreceiveComponent;
  let fixture: ComponentFixture<CourierreceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierreceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
