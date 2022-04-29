import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateroutestationsComponent } from './updateroutestations.component';

describe('UpdateroutestationsComponent', () => {
  let component: UpdateroutestationsComponent;
  let fixture: ComponentFixture<UpdateroutestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateroutestationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateroutestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
