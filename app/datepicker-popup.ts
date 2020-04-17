import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html'
})
export class NgbdDatepickerPopup implements OnInit {
  ctrl = new FormControl(null)

  _fg : FormGroup;

  constructor(private _fb : FormBuilder){}

  ngOnInit(){
    this._fg = this._fb.group({
      date : [null, [Validators.required]]
    })
  }

  submit(){
    console.log(this._fg.value)
  }
}
