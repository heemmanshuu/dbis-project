import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelemployeeComponent } from './delemployee.component';

describe('DelemployeeComponent', () => {
  let component: DelemployeeComponent;
  let fixture: ComponentFixture<DelemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
