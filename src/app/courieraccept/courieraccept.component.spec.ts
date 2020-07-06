import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourieracceptComponent } from './courieraccept.component';

describe('CourieracceptComponent', () => {
  let component: CourieracceptComponent;
  let fixture: ComponentFixture<CourieracceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourieracceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourieracceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
