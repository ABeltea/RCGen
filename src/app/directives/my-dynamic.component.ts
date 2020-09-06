import { Component, ElementRef } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'my-dynamic-component',
  templateUrl: '../templates/form.html',
  styles: ['.header { display: flex; justify-content: center; margin: 15px; }']
})

export class MyDynamicComponent {
  message = "HELLO";
  
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(public elRef: ElementRef, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
}