import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGetByIdComponent } from './loan-get-by-id.component';

describe('LoanGetByIdComponent', () => {
  let component: LoanGetByIdComponent;
  let fixture: ComponentFixture<LoanGetByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanGetByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
