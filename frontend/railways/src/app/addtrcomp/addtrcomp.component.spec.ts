import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrcompComponent } from './addtrcomp.component';

describe('AddtrcompComponent', () => {
  let component: AddtrcompComponent;
  let fixture: ComponentFixture<AddtrcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtrcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
