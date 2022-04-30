import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCompositionComponent } from './train-composition.component';

describe('TrainCompositionComponent', () => {
  let component: TrainCompositionComponent;
  let fixture: ComponentFixture<TrainCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainCompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
