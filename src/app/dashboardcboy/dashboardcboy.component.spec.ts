import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcboyComponent } from './dashboardcboy.component';

describe('DashboardcboyComponent', () => {
  let component: DashboardcboyComponent;
  let fixture: ComponentFixture<DashboardcboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
