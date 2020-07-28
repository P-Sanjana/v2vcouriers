import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesguideComponent } from './servicesguide.component';

describe('ServicesguideComponent', () => {
  let component: ServicesguideComponent;
  let fixture: ComponentFixture<ServicesguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
