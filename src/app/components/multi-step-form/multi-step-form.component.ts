import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnInit {
  step: number = 1;
  form!: FormGroup;
  plans: Record<string, number> = {
    'Arcade': 9, 
    'Advanced': 12,
    'Pro': 15
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        phone: ['', [Validators.required]]
      }),
      plan: this.fb.group({
        type: ['', [Validators.required]],
        yearly: [false, [Validators.required]]
      }),
      addOns: this.fb.group({
        onlineService: [''],
        storage: [''],
        customizableProfile: ['']
      })
    })
  }
  
  get personalInfo(): FormGroup {
    return this.form.controls['personalInfo'] as FormGroup;
  }

  get plan(): FormGroup {
    return this.form.get('plan') as FormGroup;
  }

  get addOns(): FormGroup {
    return this.form.get('addOns') as FormGroup;
  }

  nextStep(): void {
    this.step++;
  }

  previousStep(): void {
    this.step--;
  }
}
