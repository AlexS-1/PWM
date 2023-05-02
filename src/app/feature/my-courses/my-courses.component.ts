import { Component, OnInit } from '@angular/core';
import jsonData from './../../../assets/content/course.json';
import { BackendDataService } from 'src/app/core/backend-data.service';
import { AuthService } from 'src/app/core/auth-service.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  constructor(private backend: BackendDataService, private authService: AuthService) {

  }

  courses: any[] = [];
  selectedCourseIds: number[] = []; // Liste der ausgewählten Kurs-IDs

  ngOnInit(): void {
    this.loadSelectedCourses();
  }

  private async loadSelectedCourses() {
    const userName: string = await this.authService.getCurrentUserName();
    const userDocument = await this.backend.getUserData(userName);
    if (userDocument.exists()) {
      this.selectedCourseIds = userDocument.data()['courses'];
    }
    const coursesDocument = await this.backend.getMyCoursesByCourseIDs(this.selectedCourseIds);
    this.courses = jsonData.filter(course => this.selectedCourseIds.includes(course.id));
  }
}
