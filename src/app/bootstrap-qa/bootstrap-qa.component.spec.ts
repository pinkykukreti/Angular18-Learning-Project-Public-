import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapQaComponent } from './bootstrap-qa.component';

describe('BootstrapQaComponent', () => {
  let component: BootstrapQaComponent;
  let fixture: ComponentFixture<BootstrapQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapQaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
