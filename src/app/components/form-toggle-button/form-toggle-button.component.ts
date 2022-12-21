import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-toggle-button',
  templateUrl: './form-toggle-button.component.html',
  styleUrls: ['./form-toggle-button.component.scss']
})
export class FormToggleButtonComponent {
  @Input() firstLabel!: string;
  @Input() secondLabel!: string;
  @Input() controlGroup!: FormGroup;
  @Input() controlName!: string;

  get control(): FormControl {
    return this.controlGroup.get(this.controlName) as FormControl;
  }
}
