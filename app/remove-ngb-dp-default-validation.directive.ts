import { Directive, OnChanges, OnInit,  ElementRef, HostListener, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import moment from 'moment';
import { NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[removeNgbDpDefaultValidation]'
})
export class RemoveNgbDateDatepickerDefaultValidation {
  constructor(private e: ElementRef, private dt: NgbInputDatepicker) { 
    dt.validate = () => null;
  }
}