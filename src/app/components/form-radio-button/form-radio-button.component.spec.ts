import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioButtonComponent } from './form-radio-button.component';

describe('FormRadioButtonComponent', () => {
  let component: FormRadioButtonComponent;
  let fixture: ComponentFixture<FormRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
