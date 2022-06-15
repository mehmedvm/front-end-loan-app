import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGetAllComponent } from './loan-get-all.component';

describe('LoanGetAllComponent', () => {
  let component: LoanGetAllComponent;
  let fixture: ComponentFixture<LoanGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
