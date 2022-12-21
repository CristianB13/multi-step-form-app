import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxButtonComponent } from './form-checkbox-button.component';

describe('FormCheckboxButtonComponent', () => {
  let component: FormCheckboxButtonComponent;
  let fixture: ComponentFixture<FormCheckboxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCheckboxButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCheckboxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
