import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  newUserForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newUserForm = this.fb.group({
      name: ['', Validators.required],
      last: new FormControl('', Validators.required),
      telephone: ['', [Validators.required, Validators.pattern('[0-9 ]{8,20}')]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  onSubmit() {
    console.log(this.newUserForm.value);
  }
}
