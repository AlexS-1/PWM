import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // import the HttpClientModule

@Injectable({
  providedIn: 'root'
})
export class AppFetchDataTsService {

  constructor(private http: HttpClient) { }

  getContentData() {
    console.log(this.http.get('../assets/content/course.json'));
    return this.http.get('../assets/content/course.json');
  }
}