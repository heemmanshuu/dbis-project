import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelstationComponent } from './delstation.component';

describe('DelstationComponent', () => {
  let component: DelstationComponent;
  let fixture: ComponentFixture<DelstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
