import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsavblComponent } from './trainsavbl.component';

describe('TrainsavblComponent', () => {
  let component: TrainsavblComponent;
  let fixture: ComponentFixture<TrainsavblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainsavblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsavblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
