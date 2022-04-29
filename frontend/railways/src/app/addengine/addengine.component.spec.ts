import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddengineComponent } from './addengine.component';

describe('AddengineComponent', () => {
  let component: AddengineComponent;
  let fixture: ComponentFixture<AddengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddengineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
