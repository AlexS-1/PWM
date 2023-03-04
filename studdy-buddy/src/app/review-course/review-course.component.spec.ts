import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCourseComponent } from './review-course.component';

describe('ReviewCourseComponent', () => {
  let component: ReviewCourseComponent;
  let fixture: ComponentFixture<ReviewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
