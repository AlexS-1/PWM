import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStarRatingHoverComponent } from './app-star-rating-hover.component';

describe('AppStarRatingHoverComponent', () => {
  let component: AppStarRatingHoverComponent;
  let fixture: ComponentFixture<AppStarRatingHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppStarRatingHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStarRatingHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
