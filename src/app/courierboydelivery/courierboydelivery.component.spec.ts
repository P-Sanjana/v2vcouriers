import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierboydeliveryComponent } from './courierboydelivery.component';

describe('CourierboydeliveryComponent', () => {
  let component: CourierboydeliveryComponent;
  let fixture: ComponentFixture<CourierboydeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierboydeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierboydeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
