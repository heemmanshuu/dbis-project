import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltrcompComponent } from './deltrcomp.component';

describe('DeltrcompComponent', () => {
  let component: DeltrcompComponent;
  let fixture: ComponentFixture<DeltrcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltrcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltrcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
