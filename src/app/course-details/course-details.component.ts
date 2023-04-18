import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsonData from './../../assets/content/course.json';
import commentData from './../../assets/content/comments.json';
import { StarRatingComponent } from '../star-rating/star-rating.component'


interface DataEntry {
  id: number;
  title: string;
  description: string;
  userId: string;
  rating?: number;
}

interface CommentEntry {
  username: string;
  review: string;
  kurs_id: number;
  date: string;
  rating: number;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  dataEntry: DataEntry | undefined;
  reviews: CommentEntry[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.dataEntry = jsonData.find((entry) => entry.id === parseInt(id, 10));
      this.reviews = commentData.filter((entry) => entry.kurs_id === parseInt(id, 10));
    });
  }
}
