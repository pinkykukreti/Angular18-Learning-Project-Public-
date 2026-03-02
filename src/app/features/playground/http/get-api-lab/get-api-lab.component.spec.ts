import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiLabComponent } from './get-api-lab.component';

describe('GetApiLabComponent', () => {
  let component: GetApiLabComponent;
  let fixture: ComponentFixture<GetApiLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
