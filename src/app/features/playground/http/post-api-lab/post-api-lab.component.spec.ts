import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiLabComponent } from './post-api-lab.component';

describe('PostApiLabComponent', () => {
  let component: PostApiLabComponent;
  let fixture: ComponentFixture<PostApiLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApiLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
