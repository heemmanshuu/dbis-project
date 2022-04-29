import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroutestationsComponent } from './addroutestations.component';

describe('AddroutestationsComponent', () => {
  let component: AddroutestationsComponent;
  let fixture: ComponentFixture<AddroutestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddroutestationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroutestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
