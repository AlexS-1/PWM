import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppFetchDataTsService {

  constructor(private http: HttpClient) { }

  getContentData() {
    return this.http.get('../assets/content/course.json');
  }
}