import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelcoachComponent } from './delcoach.component';

describe('DelcoachComponent', () => {
  let component: DelcoachComponent;
  let fixture: ComponentFixture<DelcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelcoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
