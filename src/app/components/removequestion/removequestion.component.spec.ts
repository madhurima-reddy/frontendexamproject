import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovequestionComponent } from './removequestion.component';

describe('RemovequestionComponent', () => {
  let component: RemovequestionComponent;
  let fixture: ComponentFixture<RemovequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
