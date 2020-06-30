import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierrequestComponent } from './courierrequest.component';

describe('CourierrequestComponent', () => {
  let component: CourierrequestComponent;
  let fixture: ComponentFixture<CourierrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
