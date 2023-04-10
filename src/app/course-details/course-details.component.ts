import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsonData from './../../assets/content/course.json';

interface DataEntry {
  id: number;
  title: string;
  description: string;
  userId: string;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  dataEntry: DataEntry | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.dataEntry = jsonData.find((entry) => entry.id === parseInt(id, 10));
    });
  }
}
