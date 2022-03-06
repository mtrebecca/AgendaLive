import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl='';

  httpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor() { }
}
