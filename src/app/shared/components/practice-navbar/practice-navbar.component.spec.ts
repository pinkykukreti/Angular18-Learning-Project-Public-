import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeNavbarComponent } from './practice-navbar.component';

describe('PracticeNavbarComponent', () => {
  let component: PracticeNavbarComponent;
  let fixture: ComponentFixture<PracticeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
