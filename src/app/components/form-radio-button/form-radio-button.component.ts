import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-radio-button',
  templateUrl: './form-radio-button.component.html',
  styleUrls: ['./form-radio-button.component.scss']
})
export class FormRadioButtonComponent {
  @Input() title!: string;
  @Input() info!: string;
  @Input() iconUrl!: string;
  @Input() value!: string;
  @Input() controlName!: string;
  @Input() controlGroup!: FormGroup;
}
