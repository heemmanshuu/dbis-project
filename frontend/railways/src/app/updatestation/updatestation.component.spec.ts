import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestationComponent } from './updatestation.component';

describe('UpdatestationComponent', () => {
  let component: UpdatestationComponent;
  let fixture: ComponentFixture<UpdatestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
