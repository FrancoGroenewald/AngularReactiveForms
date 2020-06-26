import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.css']
})
export class CombinationComponent implements OnInit {
  combinationForm: FormGroup;
  invalidNames = ['Franco', 'Wendy', 'Quintilla', 'Neil'];
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.combinationForm = this.fb.group({
      name: ['', [Validators.required, this.namesValidation.bind(this)]],
      last: ['', Validators.required, this.lastValidation.bind(this)],
      hobbies: this.fb.array([])
    });
    this.addHobbie();
  }

  get controlsHobbies() {
    return (this.combinationForm.get('hobbies') as FormArray).controls;
  }

  addHobbie() {
    const add = this.combinationForm.get('hobbies') as FormArray;
    add.push(new FormControl('', Validators.required));
  }

  removeHobbie(i) {
    const remove = this.combinationForm.get('hobbies') as FormArray;
    remove.removeAt(i);
  }

  namesValidation(control: FormControl): { [s: string]: boolean } {
    if (this.invalidNames.indexOf(control.value) !== -1) {
        return { nameIsForbidden: true };
    }
    return null;
  }

  lastValidation(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.api.lastValidation()
        .then(response => {
          const lastNames = [];
          Object.entries(response).map(key => {
            lastNames.push(key[1].last_name);
          });
          if (lastNames.indexOf(control.value) !== -1) {
              return { lastExist: true };
          }
          return null;
        });
}

  onSubmit() {
    console.log(this.combinationForm.value);
  }

}
