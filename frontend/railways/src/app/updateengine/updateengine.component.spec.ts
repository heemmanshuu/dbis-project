import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateengineComponent } from './updateengine.component';

describe('UpdateengineComponent', () => {
  let component: UpdateengineComponent;
  let fixture: ComponentFixture<UpdateengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateengineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
