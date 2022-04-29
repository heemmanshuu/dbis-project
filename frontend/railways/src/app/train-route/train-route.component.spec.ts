import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainRouteComponent } from './train-route.component';

describe('TrainRouteComponent', () => {
  let component: TrainRouteComponent;
  let fixture: ComponentFixture<TrainRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
