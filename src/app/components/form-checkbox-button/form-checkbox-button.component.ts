import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox-button',
  templateUrl: './form-checkbox-button.component.html',
  styleUrls: ['./form-checkbox-button.component.scss']
})
export class FormCheckboxButtonComponent {
  @Input() title!: string;
  @Input() info!: string;
  @Input() price!: string;
  @Input() controlGroup!: FormGroup;
  @Input() controlName!: string;

  get control(): FormControl {
    return this.controlGroup.get(this.controlName) as FormControl
  }
}
