import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrcoachComponent } from './addtrcoach.component';

describe('AddtrcoachComponent', () => {
  let component: AddtrcoachComponent;
  let fixture: ComponentFixture<AddtrcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtrcoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
