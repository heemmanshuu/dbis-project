import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrcoachComponent } from './updatetrcoach.component';

describe('UpdatetrcoachComponent', () => {
  let component: UpdatetrcoachComponent;
  let fixture: ComponentFixture<UpdatetrcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetrcoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetrcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
