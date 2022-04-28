import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltrainComponent } from './deltrain.component';

describe('DeltrainComponent', () => {
  let component: DeltrainComponent;
  let fixture: ComponentFixture<DeltrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
