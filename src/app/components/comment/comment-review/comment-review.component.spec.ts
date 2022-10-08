import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReviewComponent } from './comment-review.component';

describe('CommentReviewComponent', () => {
  let component: CommentReviewComponent;
  let fixture: ComponentFixture<CommentReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
