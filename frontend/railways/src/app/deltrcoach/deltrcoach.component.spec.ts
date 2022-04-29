import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltrcoachComponent } from './deltrcoach.component';

describe('DeltrcoachComponent', () => {
  let component: DeltrcoachComponent;
  let fixture: ComponentFixture<DeltrcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltrcoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltrcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
