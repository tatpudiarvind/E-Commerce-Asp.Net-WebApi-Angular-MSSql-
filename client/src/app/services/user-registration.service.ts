import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  private apiUrl = 'http://localhost:5034/api/Users/'; // Example API URL

  constructor(private http: HttpClient) { }

  createUser(userData:any): Observable<any> {
    return this.http?.post(this.apiUrl,userData);
  }
}
