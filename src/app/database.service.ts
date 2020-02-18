import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getAllNews() {
    console.log('get news');
    return this.http.get(`${this.baseUrl}/news`);
  }
  getAllEvents() {
    console.log('get events');
    return this.http.get(`${this.baseUrl}/events`);
  }
}
