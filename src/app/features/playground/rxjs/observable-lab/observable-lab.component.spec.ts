import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableLabComponent } from './observable-lab.component';

describe('ObservableLabComponent', () => {
  let component: ObservableLabComponent;
  let fixture: ComponentFixture<ObservableLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
