import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-datatable',
  templateUrl: './form-datatable.component.html',
  styleUrls: ['./form-datatable.component.css']
})
export class FormDatatableComponent implements OnInit {
  dataTableForm: FormGroup;
  genders = ['Female', 'Male'];
  ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const data = [];
    this.api.getData()
    .subscribe(response => {
      Object.entries(response).map(key => {
        data.push(key[1]);
      });
      this.initRows(data);
    });
  }

  initRows(data) {
    this.dataTableForm = this.fb.group({
        tableRow: this.fb.array(data.map(userData => this.populateForm(userData)))
    });
  }

  populateForm(userData) {
    return this.fb.group({
      id: [userData.id, [Validators.required, Validators.minLength(5)]],
      first_name: [userData.first_name, [Validators.required]],
      last_name: [userData.last_name, [Validators.required]],
      email: [userData.email, [Validators.required, Validators.email]],
      gender: [userData.gender, [Validators.required, Validators.email], this.validateGender.bind(this)],
      ip_address: [userData.ip_address, [Validators.required, ]]
    });
  }

  get controlsTableRow() {
    return (this.dataTableForm.get('tableRow') as FormArray).controls;
  }

  validateGender(control: FormControl): { [s: string]: boolean } {
    if (this.genders.indexOf(control.value) === -1) {
      return { wrongGender: true };
    }
    return null;
  }

  validateIP(control: FormControl): { [s: string]: boolean } {
    if (!this.ipRegex.test(control.value)) {
      return { IPIsForbidden: true };
    }
    return null;
  }

  validationAt(index) {
    return (this.dataTableForm.get('tableRow') as FormArray).at(index);
  }

}
