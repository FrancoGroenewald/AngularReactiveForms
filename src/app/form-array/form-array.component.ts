import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  emailForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.emailForm = new FormGroup({
      emails: new FormArray([])
    });
    this.addEmail();

  }

  get controlsEmails() {
    return (this.emailForm.get('emails') as FormArray).controls;
  }

  addEmail() {
    const add = this.emailForm.get('emails') as FormArray;
    add.push(new FormControl('', [Validators.required, Validators.email]));
  }

  removeEmail(i) {
    const remove = this.emailForm.get('emails') as FormArray;
    remove.removeAt(i);
  }

}
