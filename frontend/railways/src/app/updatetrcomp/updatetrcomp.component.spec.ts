import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrcompComponent } from './updatetrcomp.component';

describe('UpdatetrcompComponent', () => {
  let component: UpdatetrcompComponent;
  let fixture: ComponentFixture<UpdatetrcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetrcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetrcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
