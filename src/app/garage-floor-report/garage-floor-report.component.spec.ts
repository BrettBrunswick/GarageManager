import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageFloorReportComponent } from './garage-floor-report.component';

describe('GarageFloorReportComponent', () => {
  let component: GarageFloorReportComponent;
  let fixture: ComponentFixture<GarageFloorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageFloorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageFloorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
