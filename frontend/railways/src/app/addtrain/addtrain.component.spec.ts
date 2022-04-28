import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrainComponent } from './addtrain.component';

describe('AddtrainComponent', () => {
  let component: AddtrainComponent;
  let fixture: ComponentFixture<AddtrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
