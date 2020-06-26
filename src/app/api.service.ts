import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError,  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/data/';

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(this.apiUrl);
  }

  lastValidation() {
    return this.httpClient.get(this.apiUrl).pipe(
    map(response => {
      return response;
    })
    ).toPromise();
  }
}
