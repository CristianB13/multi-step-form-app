import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToggleButtonComponent } from './form-toggle-button.component';

describe('FormToggleButtonComponent', () => {
  let component: FormToggleButtonComponent;
  let fixture: ComponentFixture<FormToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
