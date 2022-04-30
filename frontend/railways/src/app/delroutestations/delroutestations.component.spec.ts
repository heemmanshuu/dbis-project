import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelroutestationsComponent } from './delroutestations.component';

describe('DelroutestationsComponent', () => {
  let component: DelroutestationsComponent;
  let fixture: ComponentFixture<DelroutestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelroutestationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelroutestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
