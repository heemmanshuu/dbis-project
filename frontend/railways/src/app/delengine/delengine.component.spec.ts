import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelengineComponent } from './delengine.component';

describe('DelengineComponent', () => {
  let component: DelengineComponent;
  let fixture: ComponentFixture<DelengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelengineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
