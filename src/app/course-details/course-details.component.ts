import { Component } from '@angular/core';
import courseDetails from '../../assets/content/course.json';

interface CourseContent{
  id:Number;
  titel:String;
  description:String;
  userId:String
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  
  courseContent:CourseContent[] = courseDetails;

}
