import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendlyService {

  constructor(private http: HttpClient) { }

  createCalendlyEntry(UserName: string) {
    return this.http.post(`https://hookb.in/E7EEykKyYnUdrLgJYe1Q/`, UserName);
  }
}
