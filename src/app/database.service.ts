import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getAllNews() {
    return this.http.get(`${this.baseUrl}/news`);
  }
  getAllEvents() {
    return this.http.get(`${this.baseUrl}/events`);
  }

  getVitaData() {
    return this.http.get(`${this.baseUrl}/vita`);
  }


}
